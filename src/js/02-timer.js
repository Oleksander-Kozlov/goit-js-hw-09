import flatpickr from 'flatpickr';
import notiflix from 'notiflix';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
// функція конвертації мілісекунд
import { convertMs } from '../helpers/convertMs';
//дістаєм HTML-елементи
const inputDate = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('body button[data-start]');
const leftDays = document.querySelector('.value[data-days]');
const leftHours = document.querySelector('.value[data-hours]');
const leftMinutes = document.querySelector('.value[data-minutes]');
const leftSeconds = document.querySelector('.value[data-seconds]');
// зміна для обраної дати
let dayX = 0;
// опції календаря
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (selectedDates[0] < new Date() || selectedDates[0] === new Date()) {
      notiflix.Notify.failure('Please choose a date in the future', {
        position: 'center-top',
      });

      startBtn.setAttribute('disabled', 'true');
    } else {
      startBtn.removeAttribute('disabled', 'true');
      startBtn.setAttribute('active', 'true');
      dayX = selectedDates[0];
    }
  },
};
flatpickr(inputDate, options);

startBtn.addEventListener('click', onClick);
function onClick() {
  const targetDate = dayX;
  setInterval(() => {
    const currentDate = new Date();
    addLeadingZero(convertMs(targetDate - currentDate)), 1000;
  });

  function addLeadingZero(value) {
    const values = Object.values(value);
    leftSeconds.textContent = values[3].toString().padStart(2, '0');
    leftMinutes.textContent = values[2].toString().padStart(2, '0');
    leftHours.textContent = values[1].toString().padStart(2, '0');
    leftDays.textContent = values[0].toString().padStart(2, '0');
  }
}
