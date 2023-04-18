function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        res(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        rej(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
//

const form = document.querySelector('.form');
const submitBtn = form.lastElementChild;

form.addEventListener('submit', onClick);

function onClick(event) {
  event.preventDefault();
  const {
    elements: { delay, step, amount },
  } = event.currentTarget;

  for (let i = 0; i > amount.value - 1; i += 1) {
    createPromise(i, delay.value + step.value * i)
      .then((message) => { console.log(message);
      })
      .catch((message) => { console.log(message)
         
      });
  }
}
