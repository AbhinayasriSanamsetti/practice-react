import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
        <p>The current time is :</p> 
      <h2>{time.toLocaleDateString()}</h2>
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  );
}

export default Clock;