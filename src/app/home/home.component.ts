import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import BtcExchangeRates from '../../services/BtcExchangeRates';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  status: Object;
  usdPrice: string = '10';
  btcPrice: string;

  constructor(
    private BtcExchangeRatesService: BtcExchangeRates,
  ) {

  }

  ngOnInit() {
    this.convertUsdToBtc();
  }

  convertUsdToBtc() {
    this.BtcExchangeRatesService.getUsdToBtc(parseInt(this.usdPrice, 10))
      .subscribe(res => this.btcPrice = res);
  }

}
