import { useState, useEffect } from 'react';
import style from './.module.scss';

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    generateCalendar(currentDate);
  }, [currentDate]);

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendar = (date: Date) => {
    const daysContainer = document.querySelector(`.${style.days}`);

    if (!daysContainer) return;

    daysContainer.innerHTML = '';

    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth();

    const totalDays = getDaysInMonth(currentYear, currentMonth);
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();

    const monthName = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    const monthHeader = document.createElement('div');
    monthHeader.textContent = `${monthName} ${year}`;
    monthHeader.className = style.month;
    // daysContainer.appendChild(monthHeader);

    for (let i = 0; i < firstDay; i++) {
      const emptyCell = document.createElement('div');
      emptyCell.className = style.day;
      daysContainer.appendChild(emptyCell);
      emptyCell.className = `${style.day} ${style.emptyDay}`;
    }

    for (let day = 1; day <= totalDays; day++) {
        const dayCell = document.createElement('div');
        dayCell.textContent = day.toString();
        dayCell.className = style.day;
      
        // Add event listener to toggle highlightedDay class on click
        dayCell.addEventListener('click', () => {
          // Remove highlightedDay class from all day cells
          const allDayCells = document.querySelectorAll(`.${style.day}`);
          allDayCells.forEach((cell) => cell.classList.remove(style.highlightedDay));
      
          // Apply highlightedDay class to the clicked day cell
          dayCell.classList.add(style.highlightedDay);
        });
      
        daysContainer.appendChild(dayCell);
      }
  };


  const goToPreviousMonth = () => {
    const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
    setCurrentDate(prevMonth);
  };

  const goToNextMonth = () => {
    const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
    setCurrentDate(nextMonth);
  };

  return (
    <div className={style.calendar}>
      <div className={style.monthHeader}>
        <button onClick={goToPreviousMonth}>&lt;</button>
        <div className={style.monthText}>
          {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
        </div>
        <button onClick={goToNextMonth}>&gt;</button>
      </div>
      <div className={style.weekdays}>
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className={style.days}></div>
    </div>
  );
};

export default Calendar;
