import React, { useEffect, useState } from "react";
import "./CircularStatusBar.css"; // Create this CSS file for styling

function CircularStatusBar({ percentage, time, start }) {
  const [angle, setAngle] = useState(0);

  console.log(percentage);

  useEffect(() => {
    if (start) {
      if (angle < 360) setAngle((prev) => prev + percentage);
    } else {
      setAngle(0);
    }
  }, [time, start]);

  return (
    <div className="circular-status-bar">
      <div
        class="circle-arc"
        style={{
          background: `conic-gradient(#ff6a6a 0deg ${
            360 - angle
          }deg, transparent ${360 - angle}deg 360deg)`,
        }}
      ></div>
      <div className="fill"></div>
    </div>
  );
}

export default CircularStatusBar;
