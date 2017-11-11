import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, map, tap} from 'rxjs/operators';
import {toString as _toString} from 'lodash';

@Injectable()
export class BtcExchangeRates {
  private BASE_URL = 'https://blockchain.info/tobtc';

  constructor(private http: HttpClient,) {}

  getUsdToBtc(usdPrice: number) {
    return this.http.get(this.BASE_URL, {
      params: {currency: 'USD', value: usdPrice}
    })
      .map(_toString)
      .pipe(
        catchError(this.handleError('getUsdToBtc', 'Unable to fetch exchange rate.'))
      );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }
}
