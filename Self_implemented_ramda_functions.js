//Self Implementation of Ramda Functions

// pipe() function
let pipe = (...params) => value =>
  params.reduce((accum, val) => val(accum) , value));

const piperesult = pipe(
  e => e * 10,
  e => e + 20,
  e => e + 30,
  )(5);

console.log(piperesult); //100

//compose() function
let compose = (...params) => value =>
  params.reverse().reduce((accum, val) => val(accum) , value);

const composeresult = compose(
  e => e * 10,
  e => e + 20,
  e => e + 30,
  )(5);

console.log(composeresult); //550

//converge function

let converge = (func,...params) => value =>
 func(params.map( val => val(value)));
