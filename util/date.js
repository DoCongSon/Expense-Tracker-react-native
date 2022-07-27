const getFormatDate = (date) => `${date.getDate()} - ${date.getMonth() + 1} - ${date.getFullYear()}`;

const getDateMinusDays = (date, days) => new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);

export { getFormatDate, getDateMinusDays };
