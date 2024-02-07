// const status = true;

// console.log("task one");

// promise defenision
// const promise = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     if (status) {
//       resolve("task two");
//     } else {
//       reject("faild");
//     }
//   }, 2000);
// });

// promise colled
// promise
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// console.log("task three");

//++++++++++++++++ start promise  +++++++++++++

const paymentSuccess = true;
const marks = 70;

function enroll() {
  console.log("cours enrollment is in progrees");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (paymentSuccess) {
        resolve();
      } else {
        reject("payment failed");
      }
    }, 2000);
  });
  return promise;
}

function progrees() {
  console.log("cours on progress");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (marks >= 80) {
        resolve();
      } else {
        reject("you could not enouth marks");
      }
    }, 3000);

  });
  return promise;
}

function getCertificate() {
  console.log("pepering your certificate");

  const promise = new Promise(function (resolve) {
    setTimeout(() => {
      resolve("congrats get your certificate");
    }, 1000);
    
  });
  return promise;
}

enroll()
  .then(progrees)
  .then(getCertificate)
  .then(function (value) {
    console.log(value);
  })
  .catch(function (error) {
    console.log(error);
  });
