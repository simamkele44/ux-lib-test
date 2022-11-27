export type checkSame = {
    same_year: boolean;
    same_month: boolean;
    same_day: boolean;
    same_hour: boolean;
    same_min: boolean;
    same_sec: boolean;
}

export type checkDifference = {
    in_secs: boolean;
    in_mins: boolean;
    in_hours: boolean;
    in_week: boolean;
    in_days: boolean;
    in_months: boolean;
}

export type timeElapsed = {
    elapsed_secs: number;
    elapsed_mins: number;
    elapsed_hours: number;
    elapsed_days: number;
    elapsed_months: number;
    elapsed_years: number;
}