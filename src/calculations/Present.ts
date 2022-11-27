import { calcSecs, calcMins, calcHours, calcDays, calcWeeks, calcMonths} from "./Times";
import { Tense } from "./Tense";

export class Present extends Tense{

    constructor(ask_time: Date, now_time: Date){
        super(ask_time, now_time);
    }

    public CalcTime = (): string => {

        if(Math.abs(this.ask_time.getMonth()-this.now_time.getMonth())<=1){
            if(Math.abs((this.ask_time.getDate())-this.now_time.getDate())<=1){
                if(Math.abs(this.now_time.getHours()-this.ask_time.getHours())<=1){
                    if(Math.abs(this.now_time.getMinutes()-this.ask_time.getMinutes())<=1){
                        return calcSecs.calc(this.now_time.getSeconds()-this.ask_time.getSeconds());
                    }else{
                        return calcMins.calc(this.now_time.getMinutes()-this.ask_time.getMinutes());
                    }
                }else{
                    return calcHours.calc(this.now_time.getHours()-this.ask_time.getHours());
                }
            }else{
                if(Math.abs((this.ask_time.getDate())-this.now_time.getDate())<=6){
                    return calcDays.calc(this.now_time.getDate()-(this.ask_time.getDate()));
                }else{
                    return calcWeeks.calc(this.now_time.getDate()-(this.ask_time.getDate()));
                }
                
            }
        }else{
            return calcMonths.calc(this.ask_time.getMonth()-this.now_time.getMonth());
        }


    }
}