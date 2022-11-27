import { askTime } from './askTime';

export class TimeTense {
    nowTime: Date;
    askTime: askTime;


    constructor(asktime: Date, nowtime: Date){
        this.nowTime = nowtime;
        this.askTime = new askTime(asktime);
    }

    public timeTense = (): string => {

        const date_year: number = this.askTime.getAskYear;
        if(date_year<this.nowTime.getFullYear()){
            return "past";
        }else if(date_year==this.nowTime.getFullYear()){
            return "present";
        }else if(date_year>this.nowTime.getFullYear()){
            return "future";
        }else{
            return "Error: invalid inputs pleae double check date fomart. Expected fomart: YYYY-MM-DDTHH:MM:SS";
        }
        
    }

}