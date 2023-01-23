import { DateTime } from './luxon.js';
// const { DateTime } = require("luxon");
const today = document.getElementById('date');
const setTime = () => {
  const now = DateTime.now();
  const date = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  today.textContent = date;
};

setInterval(setTime, 1000);

export default setTime;