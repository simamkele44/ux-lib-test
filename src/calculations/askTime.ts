import { fullTime } from "../types/fulltime";

export class askTime implements fullTime{

    public ask: Date
    public sec: number
    public min: number
    public hour: number
    public day: number
    public month: number
    public year: number

    constructor(ask: Date){
       this.ask = ask;
       this.sec = this.ask.getSeconds();
       this.min = this.ask.getMinutes();
       this.hour = this.ask.getHours();
       this.day = this.ask.getDate();
       this.month = this.ask.getMonth()+1;
       this.year = this.ask.getFullYear();
    }

    get getAskSec(): number {
        return this.sec;
    }

    get getAskMin(): number {
        return this.min;
    }

    get getAskHour(): number {
        return this.hour;
    }

    get getAskDay(): number {
        return this.day;
    }

    get getAskMonth(): number {
        return this.month;
    }

    get getAskYear(): number {
        return this.year;
    }
}