import dayjs from "dayjs";

export function getRemainingTimeUntilMsTimestamp(timestampMs: any):any {
    const timestampDayjs = dayjs(timestampMs);
    const nowDayjs = dayjs();

    return{
        seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
        minutes: getRemainingMinutes(nowDayjs, timestampDayjs),
        hours: getRemainingHours(nowDayjs, timestampDayjs),
        days: getRemainingDays(nowDayjs, timestampDayjs)
    };
}

function getRemainingSeconds(nowDayjs: any, timestampDayjs: any) {
    const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60;
    return seconds;
}

function getRemainingMinutes(nowDayjs: any, timestampDayjs: any) {
    const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60;
    return minutes;
}

function getRemainingHours(nowDayjs: any, timestampDayjs: any) {
    const hours = timestampDayjs.diff(nowDayjs, 'hours') % 24;
    return hours;
}

function getRemainingDays(nowDayjs: any, timestampDayjs: any) {
    const days = timestampDayjs.diff(nowDayjs, 'days');
    return days;
}