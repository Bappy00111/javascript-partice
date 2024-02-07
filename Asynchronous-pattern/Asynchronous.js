const paymentSuccess = true;
const marks = 80;
function enroll(collback) {
  console.log("cours enrollment is in progrees");
  setTimeout(() => {
    if (paymentSuccess) {
      collback();
    } else {
      console.log("payment faild");
    }
  }, 2000);
}

function progrees(collback) {
  console.log("cours on progress");
  setTimeout(() => {
    if (marks >= 80) {
      collback();
    } else {
      console.log("you could not enouth marks");
    }
  }, 3000);
}

function getCertificate() {
  console.log("pepering your certificate");
  setTimeout(() => {
    console.log("congrats get your certificate");
  }, 1000);
}

enroll(function () {
  progrees(getCertificate)
})