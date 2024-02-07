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

async function course() {
  try {
    await enroll();
    await progrees();
    const message = await getCertificate();
    console.log(message);
  } catch(error) {
    console.log(error);
  }
}

course();

// enroll()
//   .then(progrees)
//   .then(getCertificate)
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
