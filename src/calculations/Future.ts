import { calcSecs, calcMins, calcHours, calcDays, calcWeeks, calcMonths, calcYears } from "./Times";
import { Tense } from "./Tense";

export class Future extends Tense{

    constructor(ask_time: Date, now_time: Date){
        super(ask_time, now_time);
    }

    public CalcTime = (): string => {

        if(((12-this.now_time.getMonth())+this.ask_time.getMonth())>=12 || (this.ask_time.getFullYear()-this.now_time.getFullYear())>1){
            return calcYears.calc(this.now_time.getFullYear()-this.ask_time.getFullYear());
        }

        if(((12-this.now_time.getMonth())+this.ask_time.getMonth())<=1){
            const now_month_last_day: number = (new Date(this.now_time.getFullYear(), this.now_time.getMonth(),0)).getDate();
            if(((now_month_last_day-this.now_time.getDate())+this.ask_time.getDate())<=1){
                if((this.now_time.getHours()-this.ask_time.getHours())<=1){
                    if((this.now_time.getMinutes()-this.ask_time.getMinutes())<=1){
                        return calcSecs.calc(this.now_time.getSeconds()-this.ask_time.getSeconds());
                    }else{
                        return calcMins.calc(this.now_time.getMinutes()-this.ask_time.getMinutes());
                    }
                }else{
                    return calcHours.calc(this.now_time.getHours()-this.ask_time.getHours());
                }
            }else{
                if(((now_month_last_day-this.ask_time.getDate())+this.now_time.getDate())<=6){
                    return calcDays.calc((now_month_last_day-this.ask_time.getDate())+this.now_time.getDate());
                }else{
                    return calcWeeks.calc((now_month_last_day-this.ask_time.getDate())+this.now_time.getDate());
                }
                
            }
        }else{
            return calcMonths.calc((12-this.now_time.getMonth())+this.ask_time.getMonth());
        }


    }
}