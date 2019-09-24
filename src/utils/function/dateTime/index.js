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
  for (let i = 1900; i <= parseInt(new Date().getFullYear()) + 50; i++) {
    years.push(`${i}`);
  }

  return years;
};
