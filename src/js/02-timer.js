import flatpickr from 'flatpickr';
import notiflix from 'notiflix';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
const inputDate = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('body button[data-start]');

const leftDays = document.querySelector('.value[data-days]');

const leftHours    = document.querySelector('.value[data-hours]'); 
const leftMinutes   = document.querySelector('.value[data-minutes]');
const leftSeconds = document.querySelector('.value[data-seconds]');
 let dayX = 0


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
 
    onClose(selectedDates) {
        
        if (selectedDates[0] < new Date() || selectedDates[0] === new Date()) {
            notiflix.Notify.failure("Please choose a date in the future",
                {
              width: '300px',
              position: 'center-top',
              closeButton: false,
                timeout: 3000,
              
            });
        
          notiflix.Report.failure.remove( 1923);
          startBtn.setAttribute('disabled', 'true');
        } else {
          startBtn.removeAttribute('disabled', 'true');
          startBtn.setAttribute('active', 'true');
          dayX = selectedDates[0];
        }
    }
}
flatpickr(inputDate, options); 


startBtn.addEventListener('click', onClick)
function onClick() {
    const currentData = new Date();
    const targetDate = dayX;
    setInterval(() => {
        const currentDate = new Date();
        convertMs(targetDate - currentDate), 1000;
    });
    function convertMs(ms) {
        // Number of milliseconds per unit of time
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        // Remaining days
        const days = Math.floor(ms / day);
        //     // Remaining hours
        const hours = Math.floor((ms % day) / hour);
        //     // Remaining minutes
        const minutes = Math.floor(((ms % day) % hour) / minute);
        //     // Remaining seconds
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);
        leftSeconds.textContent = seconds;
        leftMinutes.textContent = minutes;
        leftHours.textContent = hours;
        leftDays.textContent = days;
    }
}