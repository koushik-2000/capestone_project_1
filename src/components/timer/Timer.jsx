import "./timer.css";
import React, { useEffect, useState } from "react";
import uparrow from "../../assets/uparrow.svg";
import downarrow from "../../assets/downarrow.svg";
import CircularStatusBar from "../statusbar/CircularStatusBar";

const Timer = () => {
  const [time, setTime] = useState({
    hour: 0,
    minute: 0,
    second: 0,
  });
  const [percentage, setPercentage] = useState(0);

  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start) {
      if (time.second < 0) {
        if (time.minute === 0) {
          if (time.hour > 0) {
            setTime({ ...time, second: 59, minute: 59, hour: time.hour - 1 });
          } else {
            setStart(false);
          }
        } else setTime({ ...time, second: 59, minute: time.minute - 1 });
      }
    }
  }, [time]);

  const incrementHour = () => {
    setTime({ ...time, hour: time.hour + 1 });
  };

  const decrementHour = () => {
    if (time.hour > 0) setTime({ ...time, hour: time.hour - 1 });
  };

  const incrementMinute = () => {
    if (time.minute > 58) setTime({ ...time, minute: 0 });
    else setTime({ ...time, minute: time.minute + 1 });
  };

  const decrementMinute = () => {
    if (time.minute > 0) setTime({ ...time, minute: time.minute - 1 });
    else setTime({ ...time, minute: 59 });
  };

  const incrementSecond = () => {
    if (time.second > 58) setTime({ ...time, second: 0 });
    else setTime({ ...time, second: time.second + 1 });
  };

  const decrementSecond = () => {
    if (time.second > 0) setTime({ ...time, second: time.second - 1 });
    else setTime({ ...time, second: 59 });
  };

  const Hour = String(time.hour).padStart(2, "0");
  const Minute = String(time.minute).padStart(2, "0");
  const Second = String(time.second).padStart(2, "0");

  useEffect(() => {
    let timer;

    if (start && time.hour === 0 && time.minute === 0 && time.second === 0) {
      clearInterval(timer);
      setStart(false);
    } else if (start) {
      timer = setInterval(() => {
        setTime({ ...time, second: time.second - 1 });
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [start, time]);

  const startTimer = () => {
    setStart((prev) => !prev);
  };

  useEffect(() => {
    if (time.hour > 0 || time.minute > 0 || time.second > 0) {
      setPercentage(360 / (time.hour * 3600 + time.minute * 60 + time.second));
    } else {
      setPercentage(0);
    }
  }, [start]);

  return (
    <div className="timer">
      <div className="timer_clock">
        {" "}
        <CircularStatusBar percentage={percentage} time={time} start={start} />
        <div className="time_format">{`${Hour}:${Minute}:${Second}`}</div>
      </div>
      <div className="timer_dial">
        <div className="dial">
          <div className="hours">
            <div className="dial_header">Hour</div>
            <div className="increment" onClick={() => incrementHour()}>
              <img src={uparrow} alt="uparrow" width={15} />
            </div>
            <div className="hour">{Hour}</div>
            <div className="decrement" onClick={() => decrementHour()}>
              <img src={downarrow} alt="downarrow" width={15} />
            </div>
          </div>
          <div className="minutes">
            <div className="dial_header">Minute</div>
            <div className="increment" onClick={() => incrementMinute()}>
              <img src={uparrow} alt="uparrow" width={15} />
            </div>
            <div className="hour">{Minute}</div>
            <div className="decrement" onClick={() => decrementMinute()}>
              <img src={downarrow} alt="downarrow" width={15} />
            </div>
          </div>
          <div className="seconds">
            <div className="dial_header">Second</div>
            <div className="increment" onClick={() => incrementSecond()}>
              <img src={uparrow} alt="uparrow" width={15} />
            </div>
            <div className="hour">{Second}</div>
            <div className="decrement" onClick={() => decrementSecond()}>
              <img src={downarrow} alt="downarrow" width={15} />
            </div>
          </div>
        </div>
        <div className="start_btn" onClick={() => startTimer()}>
          {!start ? "Start" : "Stop"}
        </div>
      </div>
    </div>
  );
};

export default Timer;
