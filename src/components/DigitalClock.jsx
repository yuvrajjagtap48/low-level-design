import {useState, useEffect} from "react";

const DigitalClock = () => {
  const [time, setTimer] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimer(new Date());
    }, 1000);

    return () => 
      clearInterval(timer);
    }, []);


  return (
    <div>
      <h1>Digital Clock</h1>
      <div className="clock"> 
        {time.toLocaleTimeString()};
      </div>
    </div>
  )
}

export default DigitalClock