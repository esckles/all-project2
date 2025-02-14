import data from "./data.json";

const Calendar = () => {
  // Get current date
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const currentDay = currentDate.toLocaleString("default", { weekday: "long" });
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="flex flex-col items-center mr-10 mb-12">
      <div className="my-4 text-[25px] text-blue-950 font-bold">Calendar</div>
      <div className="w-[80%] text-blue-950  mb-5 flex justify-center items-center gap-2">
        <div className="text-blue-950  font-semibold">{currentDay},</div>
        <div className="text-blue-950  font-semibold">{currentMonth} 2024</div>
      </div>
      <div className="w-full grid grid-cols-7 gap-5">
        {data.map((props) => (
          <div className="w-full flex justify-center text-white font-semibold">
            {props.day}
          </div>
        ))}
        {calendarDays.map((day) => (
          <div
            key={day}
            className={`flex items-center justify-center py-2 px-3 rounded-full ${
              day === currentDate.getDate()
                ? "bg-indigo-800 border-[2px]  border-white text-white"
                : "bg-white"
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
