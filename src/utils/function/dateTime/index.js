import moment from 'moment';

export const generateDate = (day = '01', month = '01', year = '1990') => new Date(`${day}/${month}/${year}`);

export const generateDays = () => {
  const days = [];
  for (let i = 1; i <= 30; i++) {
    days.push(`${i}`);
  }

  return days;
};

export const generateMonths = () => moment.monthsShort();

export const generateYears = () => {
  const years = [];
  let currentYearIndex = 0;
  const currentYear = parseInt(new Date().getFullYear());
  for (let i = 1900; i <= currentYear + 50; i++) {
    if (i === currentYear) {
      currentYearIndex = i - 1900;
      console.log(i - 1900);
    }
    years.push(`${i}`);
  }

  return { years, currentYearIndex };
};
