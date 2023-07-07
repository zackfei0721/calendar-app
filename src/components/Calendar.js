import React, { useState } from 'react';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const getDaysInMonth = (month, year) => {
        return new Date(year, month, 0).getDate();
    };

    const handleDateClick = (day) => {
        console.log(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
    }

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    }

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, 0));
    }

    const daysInMonth = getDaysInMonth(currentDate.getMonth() + 1, currentDate.getFullYear());
    const startDayofWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    let dates = [];
    for (let i = 1; i <= daysInMonth; i++) {
        dates.push(i);
    }

    return (
        <div>
            <h2>US Calendar for {months[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
            <button onClick={handlePrevMonth}>Prev</button>
            <button onClick={handleNextMonth}>Next</button>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)'}}>
                {days.map((day) => (
                    <div key={day}>{day}</div>
                ))}
                {Array(startDayofWeek).fill(null).map((_, index) => (
                    <div key={`empty-${index}`}></div>
                ))}
                {dates.map((date) => (
                    <div key={date} onClick={() => handleDateClick(date)}>{date}</div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;