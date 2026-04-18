import { useState } from "react";

function CalendarPanel() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const monthName = currentDate.toLocaleString("default", {
    month: "short",
  });

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDay });

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  return (
    <div className="p-4">
      
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevMonth}>←</button>
        <h2 className="font-bold text-lg">
          {monthName} {year}
        </h2>
        <button onClick={nextMonth}>→</button>
      </div>

      {/* HARI */}
      <div className="grid grid-cols-7 text-center text-gray-500 mb-2">
        {["Su","Mo","Tu","We","Th","Fr","Sa"].map(d => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-7 gap-y-2 text-center">
        {emptyDays.map((_, i) => (
          <div key={"e" + i}></div>
        ))}

        {days.map(day => (
          <div
            key={day}
            className="h-10 w-10 mx-auto flex items-center justify-center"
          >
            {day}
          </div>
        ))}
      </div>

    </div>
  );
}

export default CalendarPanel;