var arrayEven = [];
var arrayOdd = [];

for (i=0; i < 50; i++){
  var number = Math.floor((Math.random() * 100) + 1);
  evenOrOdd(number)
}

function evenOrOdd(number){
  number%2 === 0? arrayEven.push(number): arrayOdd.push(number)
}

console.log(arrayEven,'arrayEven');
console.log(arrayOdd,'arrayOdd');
