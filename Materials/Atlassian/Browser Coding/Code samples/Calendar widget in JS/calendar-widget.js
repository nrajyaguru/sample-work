const calendarWidget = document.getElementById('calendar-widget');
const monthYearElem = document.getElementById('month-year');
const calendarDaysElem = document.getElementById('calendar-days');

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function isDayToday(day) {
    return (day === new Date().getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear());
}

function renderCalendar() {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const firstDayWeekDay = firstDayOfMonth.getDay();

    monthYearElem.textContent = `${firstDayOfMonth.toLocaleString('default', { month: 'long' })} ${currentYear}`;

    let daysHtml = '';

    // Add weekday headers
    const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    weekdays.forEach(day => daysHtml += `<div class"day header">${day}</div>`);

    for (let index = 0; index < firstDayWeekDay-1; index++) {
        daysHtml += '<div class="day"></div>';
    }

    console.log(lastDayOfMonth, daysInMonth, firstDayWeekDay);
    for (let day = 0; day < daysInMonth; day++) {
        const isToday = isDayToday(day);
        daysHtml += `<div class="day${isToday ? ' current-day' : ''}">${day + 1}</div>`;
    }

    calendarDaysElem.innerHTML = daysHtml;
}

function changeMonth(offset) {
    currentMonth += offset;

    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }

    renderCalendar();
}

// Initial render
renderCalendar();