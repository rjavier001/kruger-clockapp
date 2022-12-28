import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Hand from "./Hand";
const Clock = ({ timeZone }) => {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [second, setSecond] = useState(0);
  const [time, setTime] = useState("");

  const update = (e) => {
    const date = new Date()
      .toLocaleString("en-US", { timeZone: timeZone })
      .split(" ")[1];
    const time = date.split(":");
    setHour((Number(time[0]) / 12) * 360);
    setMin((Number(time[1]) / 60) * 360);
    setSecond((Number(time[2]) / 60) * 360);
    setTime(date);
  };

  useEffect(() => {
    setInterval(update, 1000);
  });
  return (
    <div>
      <h1>
        {timeZone} - {time}
      </h1>
      <div className="clock">
        {/* <div
        className="hand hour"
        data-hour-hand
        style={{transform:`rotate(${hour}deg)`}}
      ></div>
      <div
        className="hand minute"
        data-minute-hand
        style={{transform:`rotate(${min}deg)`}}
      ></div>
      <div
        className="hand second"
        style={{transform:`rotate(${second}deg)`}}
      ></div> */}
        <Hand type={"hand hour"} time={hour} />
        <Hand type={"hand minute"} time={min} />
        <Hand type={"hand second"} time={second} />
        <div className="number number1">1</div>
        <div className="number number2">2</div>
        <div className="number number3">3</div>
        <div className="number number4">4</div>
        <div className="number number5">5</div>
        <div className="number number6">6</div>
        <div className="number number7">7</div>
        <div className="number number8">8</div>
        <div className="number number9">9</div>
        <div className="number number10">10</div>
        <div className="number number11">11</div>
        <div className="number number12">12</div>
      </div>
    </div>
  );
};

export default Clock;

Clock.propTypes = {
  timeZone: PropTypes.string.isRequired,
};

Clock.defaultProps = {
  timeZone: "America/Bogota",
};
