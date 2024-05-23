import { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const setIntervalID = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    });

    return () => {
      clearInterval(setIntervalID);
    };
  }, []);

  return (
    <>
      <h3>Digital Clock!!</h3>
      {time}
    </>
  );
}

export default DigitalClock;
