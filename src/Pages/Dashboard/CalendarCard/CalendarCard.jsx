import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const CalendarCard = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="card w-full md:w-100 bg-base-100 shadow-xl ">
      <div className="card-body ">
        <Calendar
          value={value}
          onChange={onChange}
          className={"react-calendar-custom"}
        />
      </div>
    </div>
  );
};

export default CalendarCard;
