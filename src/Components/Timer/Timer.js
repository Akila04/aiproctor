import React from 'react';
import { useTimer } from 'react-timer-hook';

const Timer = ({ expiryTimestamp}) => {
  const {
    seconds,
    minutes,
  } = useTimer({ autoStart: true, expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
    <div style={{textAlign: 'center', fontFamily: 'monospace'}}>
      <div style={{fontSize: '40px'}}>
        <span>{("0" + minutes).slice(-2)}</span>:<span>{("0" + seconds).slice(-2)}</span>
      </div> 
    </div>
  );
}

export default Timer;