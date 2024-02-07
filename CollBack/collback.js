//++++++++++++++++++ step one +++++++++++++++++

// function myDisplayer(some) {
//     // document.getElementById("demo").innerHTML = some;
//     console.log(some);
//   }

//   function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
//   }

//   let result = myCalculator(5, 5);
//   myDisplayer(result);

//++++++++++++++++++ step two +++++++++++++++++
//   function myDisplayer(some) {
//     console.log(some);
//   }

//   function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     myDisplayer(sum)
//   }

//  myCalculator(5, 5);

//++++++++++++++++++ step three +++++++++++++++++
// function myDisplayer(some) {
//     console.log("display",some);
//   }

//   function myCalculator(num1, num2,collback) {
//     let sum = num1 + num2;

//     if(collback){
//         collback(sum)
//     }
//     return sum
//   }

//  const regult = myCalculator(5, 5,myDisplayer);
//  console.log(regult);

//++++++++++++++++++ step four +++++++++++++++++
// function myDisplayer(some) {
//     console.log("display",some);
//   }

function myCalculator(num1, num2, collback) {
  let sum = num1 + num2;

  if (collback) {
    collback(sum);
  }
  return sum;
}

 myCalculator(5, 5, function (value) {
  console.log(value);
});

