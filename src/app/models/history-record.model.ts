export class HistoryRecord 
{
    currencyFrom: String
    currencyTo: String
    convertion: String
    convertionType: String

    constructor(currencyFrom: String, currencyTo: String, convertion: String, convertionType: String) 
    {
        this.currencyFrom = currencyFrom;
        this.currencyTo = currencyTo;
        this.convertion = convertion;
        this.convertionType = convertionType;
    }
}