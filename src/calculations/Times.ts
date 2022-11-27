
export class calcSecs {
    static calc = (time: number): string => {
        if(!(time<0)){
            return (time>1? `${time} seconds ago`: `${time} second ago`);
        }else{
            return ((time)*-1>1? `Happening in ${(time)*-1} seconds`: `Happening in ${(time)*-1} second`);
        }
    }
}

export class calcMins {
    static calc = (time: number): string => {
        if(!(time<0)){
            return (time>1? `${time} minutes ago`: `${time} minute ago`);
        }else{
            return ((time)*-1>1? `Happening in ${(time)*-1} minutes`: `Happening in ${(time)*-1} minute`);
        }
    }
}

export class calcHours {
    static calc = (time: number): string => {
        if(!(time<0)){
            return (time>1? `${time} hours ago`: `${time} hour ago`);
        }else{
            return ((time)*-1>1? `Happening in ${(time)*-1} hours`: `Hapening in ${(time)*-1} hour`);
        }
    }
}


export class calcDays {
    static calc = (time: number): string => {
        if(!(time<0)){
            return (time>1? `${time} days ago`: `${time} day ago`);
        }else{
            return ((time)*-1>1? `Happening in ${(time)*-1} days`: `Happening in ${(time)*-1} day`);
        }
    }
}

export class calcWeeks {
    static calc = (time: number): string => {
        if(!(time<0)){
            if(time<14){
                return (`1 week ago`);
            }else if(time<21){
                return (`2 weeks ago`);
            }else if(time<28){
                return (`3 weeks ago`);
            }else{
                return (`4 weeks ago`);
            }
        }else{
            if(Math.abs(time)<14){
                return (`Happening in 1 week`);
            }else if(Math.abs(time)<21){
                return (`Happening in 2 weeks`);
            }else if(Math.abs(time)<28){
                return (`Happening in 3 weeks`);
            }else{
                return (`Happening in 4 weeks`);
            }
        }
    }
}

export class calcMonths {
    static calc = (time: number): string => {
        if(!(time<0)){
            return (time>1? `${time} months ago`: `${time} month ago`);
        }else{
            return ((time)*-1>1? `Happening in ${(time)*-1} months`: `Happening in ${(time)*-1} month`);
        }

    }
}

export class calcYears {
    static calc = (time: number): string => {
        if(!(time<0)){
            return (time>1? `${time} years ago`: `${time} year ago`);
        }else{
            return ((time)*-1>1? `Happening in ${(time)*-1} years`: `Happening in ${(time)*-1} year`);
        }
    }
}