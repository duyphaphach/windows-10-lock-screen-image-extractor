/**
 *  @Helper
 *  @Input: No
 *  @Output:
 *    - current date, written in format: monthName day fullYear
 */
module.exports = function (date) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December',
  ];
  return `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
};
