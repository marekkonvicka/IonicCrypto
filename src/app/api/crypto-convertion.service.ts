import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CryptoConvertionService {

  constructor(private http: HttpClient) { }

  public getSpot(currencyFrom: String, currencyTo:String) 
  {
    return this.http.get(' https://api.coinbase.com/v2/prices/'+currencyFrom+'-'+currencyTo+'/spot');
  }

  public getBuy(currencyFrom: String, currencyTo:String) 
  {
   return this.http.get(' https://api.coinbase.com/v2/prices/'+currencyFrom+'-'+currencyTo+'/buy');

  }

  public getSell(currencyFrom: String, currencyTo:String) 
  {
   return this.http.get(' https://api.coinbase.com/v2/prices/'+currencyFrom+'-'+currencyTo+'/sell');
  }
}
