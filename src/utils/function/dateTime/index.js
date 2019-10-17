import moment from 'moment';

export const generateDate = (day = '01', month = '01', year = '1990') => new Date(`${day}/${month}/${year}`);

const month30 = [4, 6, 9, 11];

export const generateDays = (monthIndex, year = null) => {
  let daysRange = 31;
  if (monthIndex === 2) {
    if (year && year % 4 === 0) daysRange = 29;
    else daysRange = 28;
  }
  if (month30.includes(monthIndex)) {
    daysRange = 30;
  }
  const days = [];
  for (let i = 1; i <= daysRange; i++) {
    days.push(`${i}`);
  }
  return days;
};

export const generateMonths = () => moment.monthsShort();

export const getMonthAndDay = date => `${moment(date).format('MMM')} ${moment(date).day()}`;

export const generateYears = () => {
  const years = [];
  let currentYearIndex = 0;
  const currentYear = parseInt(new Date().getFullYear(), 10);
  for (let i = 1900; i <= currentYear + 50; i++) {
    if (i === currentYear) {
      currentYearIndex = i - 1900;
    }
    years.push(`${i}`);
  }

  return { years, currentYearIndex };
};
