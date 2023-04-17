function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}


// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });




  
const form = document.querySelector('.form');
const submitBtn = form.lastElementChild;
const timeDelay = form.delay;
const timeStep = form.step;
const amount = form.amount;


submitBtn.addEventListener('click', onClick)

function onClick(evt) {
  
  createPromise(position, delay);
console.log(evt);
}