import { useState } from "react";
import usePreviousDay from "../../hooks/usePreviousDay";

function Day() {
  const [day, setDay] = useState("Montag");

  const previousDay = usePreviousDay(day);
  
  const getNextDay = () => {
    if (day === "Montag") setDay("Tuesday");
    if (day === "Tuesday") setDay("Wednesday");
    if (day === "Wednesday") setDay("Thursday");
    if (day === "Thursday") setDay("Friday");
    if (day === "Friday") setDay("Montag");
  };


  return (
    <section className="gray-box">
      <h3>Today is: {day}</h3>
      {previousDay && <h4>Previous work day was: {previousDay}</h4>}
      <button onClick={getNextDay}>Get next day</button>
    </section>
  );
}

export default Day;
