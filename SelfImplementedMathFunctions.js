//function to find if input value is decimal number or not
function ifdecimalnumber(num) {
    "use strict";
    let input = num.toString(10);
    let arr=input.split('.');
    if(arr.length > 1)
        return true;
    return false;
}

//Self Implementation of Math.pow() function
function selfpow(num, power) {
    "use strict";
    let n = Number(num);
    let p = Number(power);
    if(n >= -Infinity && n <= Infinity && p >= -Infinity && p <= Infinity) {
        if(n == 0)
            return 0;
        if(p == 0)
            return 1;
        if(n == 1 || p == 1)
            return n;
        if(p < 0)
            return 1/(selfpow(n, -p));
        if(Number(isFinite(n)) == 0 )
            return n;
        if(Number(isFinite(p)) == 0)
            return p;
        if((n < 0 ) && (p > 0 && p < 1))
            return NaN;
        if(ifdecimalnumber(p))
            return n**p;
        let pow1=n;
        while (p > 1)
        {
            p=p-1;
            pow1=pow1*n;
        }
        return pow1;
    }
    return NaN;
}

console.log(selfpow(7,3));
//expected output:343

//Self Implementation of Math.abs() function
function selfabs(num){
    "use strict";
    if(Number(num) >= -Infinity && Number(num) <= Infinity){
        if(Number(num) < 0)
            return -Number(num);
        return Number(num);
    }
    return NaN;
}
console.log(selfabs(-5.67));
//expected output:5.67

//Self Implementation of Math.ceil() function
function selfceil(num){
    "use strict";
    if(Number(num) >= -Infinity && Number(num) <= Infinity){
        if(ifdecimalnumber(num)){
            if(Number(num) > 0)
                return parseInt(num)+1;
            return parseInt(num);
        }
        return Number(num);
    }
    return NaN;
}
console.log(selfceil(-1.3));
//expected output:-1

//Self Implementation of Math.floor() function
function selffloor(num){
    "use strict";
    if(Number(num) >= -Infinity && Number(num) <= Infinity){
        if(ifdecimalnumber(num)){
            if(Number(num) < 0)
                return parseInt(num) - 1;
            return parseInt(num);
        }
        return Number(num);
    }
    return NaN;
}
console.log(selffloor(-1.3));
//expected output : -2

//Self Implementation of Math.round() function
function selfround(num){
    "use strict";
    if(Number(num) >= -Infinity && Number(num) <= Infinity){
        let Initial_input=num.toString(10);
        let input = Initial_input.split('.');
        if(input.length > 1){
            if(Number(input[1].charAt(0))>=5){
                if(Number(input[0]) < 0){
                    return Number(input[0]) - 1;
                }
                return Number(input[0])+1;
            }
            return Number(input[0]);
        }
        return Number(num);
    }
    return NaN;
}
console.log(selfround(-9.7));
//expected output : -10

//Self Implementation of Math.sqrt() function using Babylonian method
function selfsqrt(num){
    "use strict";
    if(Number(num) >= 0){
        if(Number(num)==Infinity || Number(num)==0 || Number(num)==1) 
            return Number(num);
        let x = Number(num);
        let y = 1;
        let e = 0.000000000000001;
        while( x-y > e){
            x=(x+y)/2;
            y=Number(num)/x;
        }
        return x;
    }
    return NaN;
}
console.log(selfsqrt(7.8));
//expected output : 2.792848008753788

//Self Implemented Math.min() function
function selfmin(...params){
    if(params.length == 0)
        return Infinity;
    let min = Number(params[0]);
    if(min >= -Infinity && min <= Infinity){
        for(let i=1; i < params.length; i++){
            if(Number(params[i]) >= -Infinity && Number(params[i]) <= Infinity)
                min= Number(params[i]) > min ? min : Number(params[i]);
            else
                return NaN;
        }
        return min;
    }
    return NaN;
}
console.log(selfmin(89, -34, 0 , -6, 789));
//expected output : -34

//Self Implemented Math.max() function
function selfmax(...params){
    if(params.length == 0)
        return -Infinity;
    let max = Number(params[0]);
    if(max >= -Infinity && max <= Infinity){
        for(let i=1; i < params.length; i++){
            if(Number(params[i]) >= -Infinity && Number(params[i]) <= Infinity)
                max= Number(params[i]) < max ? max : Number(params[i]);
            else
                return NaN;
        }
        return max;
    }
    return NaN;
}
console.log(selfmax(89, -34, 0 , -6, 789));
//expected output : 789

//self Implemented Math.random() function
function selfrandom(){
    'use strict';
    let random = (new Date()).getMilliseconds()/ 0.000456;
    let returnVal= 0.00000013456789015 * random;
    return returnVal;
}
//expected output : any random number between 0 & 1


