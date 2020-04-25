//Self Implementation of Ramda Functions

// pipe() function
const pipe = (...params) => value =>
  params.reduce((accum, val) => val(accum) , value);

const pipeResult = pipe(
  e => e * 10,
  e => e + 20,
  e => e + 30,
  )(5);

console.log(pipeResult); //100

//compose() function
const compose = (...params) => value =>
  params.reverse().reduce((accum, val) => val(accum) , value);

const composeResult = compose(
  e => e * 10,
  e => e + 20,
  e => e + 30,
  )(5);

console.log(composeResult); //550

//converge() function

const converge = (rootFn, arrFn) => value =>
   rootFn(...arrFn.map(e => e(...value)));

const convergeResult = converge(console.log , [Math.max, Math.min])([11,3,-4]); //11 -4

//cond() function
const cond = (arrCond) => value =>{
	let rs = null;
  arrCond.forEach( element =>{
    if( value == element[0] )
      rs=element[1];});
		if (rs === null)
    	rs = arrCond[arrCond.length -1][1];
		return rs;
  } ;

// assoc() function
const assoc= (prop, value, obj) =>
  Object.assign({[prop] : value}, obj);


console.log(assoc('c', 3, {a: 1, b: 2})); //Object {c : 3, a: 1, b: 2 }

// dissoc() function
const dissoc = (prop , obj) => {
    let clone = Object.assign({},obj);
    delete clone[prop];
    return clone;
};

console.log(dissoc('c', {a: 1, b: 2, c: 3})); //Object {a: 1, b: 2 }

// flatten() function
const flatten = (inArr) =>
  inArr.flat(Infinity);

console.log(flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]])); // Array(12) [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

//hasIn() function
const hasIn=(prop , obj) => prop in obj;

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}
Rectangle.prototype.area = function() {
  return this.width * this.height;
};

const square = new Rectangle(2, 2);

console.log(hasIn('height', square)); //true

//pick() function
const pick = (propArr , obj) =>{
  let newObj = {};
  propArr.forEach( element =>{
          if (element in obj)
            newObj[element] = obj[element]
  });
  return newObj;
};

console.log(pick(['a', 'b', 'd'], {'a': 1 , 'b' : 2, 'c': 3})); // Object { a: 1, b: 2 }

// prop() function
const prop=(prop , obj) => obj[prop];

console.log(prop('x', {x: 100})); //100

//sliptEvery() function
 const splitter = (initial, splitSize , params, obj ) =>{
   if( splitSize == 0)
     return params;
   if(initial >= params.length)
     return Object.values(obj);
   else {
     let additive = params.slice(initial, initial + splitSize);
     obj[initial] = additive;
     return splitter(initial + splitSize, splitSize, params, obj);
   }

 };

const splitEvery = (splitSize , params) =>
  splitter(0, splitSize, params, {});

console.log(splitEvery(3, [1, 2, 3, 4, 5, 6, 7])); //[[1, 2, 3], [4, 5, 6], [7]]
console.log(splitEvery(3, 'foobarbaz')); //['foo', 'bar', 'baz']
