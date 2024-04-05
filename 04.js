let numberOfChilds = 2;
let numberOfAdults = 1;
let numberOfSeniors = 1;

let childTicketPrice = 100;
let adultTicketPrice = 150;
let seniorTicketPrice = 120;

let totalPrice =
  numberOfChilds * childTicketPrice +
  numberOfAdults * adultTicketPrice +
  numberOfSeniors * seniorTicketPrice;

console.log(`The total ticket price is ${totalPrice}`);