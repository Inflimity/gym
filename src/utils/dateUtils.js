// Date and Week tracking utilities

const DAY_IDS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

export function getCurrentDayId() {
  const dayIndex = new Date().getDay();
  return DAY_IDS[dayIndex];
}

export function formatCurrentDate(date = new Date()) {
  const options = { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

export function formatShortDate(date = new Date()) {
  const options = { month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

/**
 * Returns an array of the 7 days for the current week starting from Monday to Sunday.
 * Each item contains:
 * - dayId: 'mon'..'sun'
 * - dayName: 'Monday'..'Sunday'
 * - shortName: 'Mon'..'Sun'
 * - date: Date object
 * - formattedDate: e.g. "Sep 26"
 * - dayNumber: e.g. 26
 * - isToday: boolean
 * - isPast: boolean
 */
export function getCurrentWeekDates() {
  const now = new Date();
  const currentDayIndex = now.getDay(); // 0 is Sunday, 1 is Monday ... 6 is Saturday
  
  // Calculate distance to current week's Monday (ISO week)
  // If today is Sunday (0), Monday was 6 days ago. If Monday (1), distance is 0.
  const distanceToMonday = currentDayIndex === 0 ? -6 : 1 - currentDayIndex;
  
  const monday = new Date(now);
  monday.setDate(now.getDate() + distanceToMonday);
  monday.setHours(0, 0, 0, 0);

  const weekDays = [
    { dayId: 'mon', dayName: 'Monday', shortName: 'Mon', offset: 0 },
    { dayId: 'tue', dayName: 'Tuesday', shortName: 'Tue', offset: 1 },
    { dayId: 'wed', dayName: 'Wednesday', shortName: 'Wed', offset: 2 },
    { dayId: 'thu', dayName: 'Thursday', shortName: 'Thu', offset: 3 },
    { dayId: 'fri', dayName: 'Friday', shortName: 'Fri', offset: 4 },
    { dayId: 'sat', dayName: 'Saturday', shortName: 'Sat', offset: 5 },
    { dayId: 'sun', dayName: 'Sunday', shortName: 'Sun', offset: 6 }
  ];

  const todayMidnight = new Date(now);
  todayMidnight.setHours(0, 0, 0, 0);

  return weekDays.map(item => {
    const dayDate = new Date(monday);
    dayDate.setDate(monday.getDate() + item.offset);

    const isToday = dayDate.getTime() === todayMidnight.getTime();
    const isPast = dayDate.getTime() < todayMidnight.getTime();

    return {
      ...item,
      date: dayDate,
      dayNumber: dayDate.getDate(),
      formattedDate: formatShortDate(dayDate),
      fullDateStr: formatCurrentDate(dayDate),
      isToday,
      isPast
    };
  });
}
