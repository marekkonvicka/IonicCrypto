import { Component } from '@angular/core';
import {CryptoConvertionService} from '../api/crypto-convertion.service';
import { LoadingController } from '@ionic/angular';
import { HistoryRecord } from '../models/history-record.model';
import { HistoryService } from '../api/history.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  currencyFrom:String
  currencyTo:String
  type:String
  currencyToHolder:String
  currencyConvertion:String
  loadingDialog: any

  constructor(private cryptoConvertionService: CryptoConvertionService, public loadingController: LoadingController, private historyService: HistoryService)
  { 
    this.currencyToHolder = "The exchange will be shown here... ";
    this.currencyFrom = "BTC";
    this.currencyTo = "CZK";
    this.type = "Spot";
  }

  public btnCalculateClicked():void
  {

    console.log(this.type);
    this.presentLoading();

    if(this.type.localeCompare("Spot") == 0)
    {
      this.cryptoConvertionService.getSpot(this.currencyFrom, this.currencyTo).subscribe( (data) => 
      {
        this.convertData(data);
        this.saveHistory();
        this.loadingDialog.dismiss();
      });
    }
    else if(this.type.localeCompare("Buy") == 0)
    {
      this.cryptoConvertionService.getBuy(this.currencyFrom, this.currencyTo).subscribe( (data) => 
      {
        this.convertData(data);
        this.saveHistory();
        this.loadingDialog.dismiss();
      });
    }
    else if(this.type.localeCompare("Sell") == 0)
    {
      this.cryptoConvertionService.getSell(this.currencyFrom, this.currencyTo).subscribe( (data) => 
      {
        this.convertData(data);
        this.saveHistory();
        this.loadingDialog.dismiss();
      });
    }
    
  }

  private saveHistory()
  {
    let record = new HistoryRecord(this.currencyFrom, this.currencyTo, this.currencyConvertion, this.type);
    this.historyService.saveRecord(record);
  }

  private convertData(data: Object)
  {
    this.currencyConvertion = data['data']['amount'];
    this.currencyConvertion = this.formatNumber(this.currencyConvertion);
    this.currencyToHolder= this.currencyTo;
  }

  private formatNumber(currencyString: String)
  {
    var x: number = +this.currencyConvertion;
    var y = new Intl.NumberFormat('de-DE').format(x);
    return y;
  } 
  async presentLoading() 
  {
    this.loadingDialog = await this.loadingController.create(
    {
      message: 'Processing ...', 
    });
    await this.loadingDialog.present();
  }

}

