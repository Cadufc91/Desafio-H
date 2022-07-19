import * as React from 'react';
import { Timer } from './style';
import { useState, useEffect } from 'react';
import { getRemainingTimeUntilMsTimestamp } from './Utils/CountdownTimerUtils';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const CountdownTimer = ({countdownTimesMs}: any) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimesMs);
        }, 1000);
        return() => clearInterval(intervalId);
    },[countdownTimesMs])

    function updateRemainingTime(countdow: any) {
        setRemainingTime (getRemainingTimeUntilMsTimestamp(countdow));
    };

    return(
        <Timer>   
            <span>{remainingTime.days}</span>
            <span>D</span>
            <span>:</span>
            <span>{remainingTime.hours}</span>
            <span>H</span>
            <span>:</span>
            <span>{remainingTime.minutes}</span>
            <span>M</span>
            <span>:</span>
            <span>{remainingTime.seconds}</span>
            <span>S</span>
        </Timer>
    )
};

export default CountdownTimer;