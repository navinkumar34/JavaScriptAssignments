//Given array
var fruits = [10,20, 30, 23];


//every() method
var b=fruits.every(x=> x <= 20);
console.log(b);
//Self implementation of every() method
var d=true;
var selfevery= (element)=> element<=20;
fruits.forEach(function(element){
	if(selfevery(element)===false){
    	d=false;
        }
});
console.log(d);


//filter() method
var fb=fruits.filter(x=> x <= 20);
console.log(fb);
//Self implementation of filter() method
var fd=[];
var selffilter=(element)=> element<=20;
fruits.forEach(function(element){
	if(selffilter(element))
    	fd.push(element)
});
console.log(fd);


//find() method
var fib=fruits.find(x=> x > 20);
console.log(fib);
//Self implementation of find() method
var fid;
var selffind=(element)=> element >20;
for(var i=0; i< fruits.length; i++)
{
	if(selffind(fruits[i]))
    {
    	fid=fruits[i];
        break;
    }
}
console.log(fid);


//findIndex() method
var finb=fruits.findIndex(x=> x > 20);
console.log(finb);
//Self implementation of findIndex() method
var find;
var selffindIndex=(element)=> element >20;
var present=false;
for(var i=0; i< fruits.length; i++)
{
	if(selffindIndex(fruits[i]))
    {
    	find=i;
        present=true;
        break;
    }
}
if(present==false)
	find=-1;
console.log(find);


//Given array
var fruits2 = [1, 2, [3, 4, [5,[7, 6]]]];;
//flat() method
console.log(fruits2.flat(2));
//Self implementation of flat() method
function selfflat(arr,val)
{   if(val==undefined)
        val=1;
    while(val > 0)
    {
        var stack=[...arr];
        var res=[];
        while(stack.length)
        {
            var elem= stack.shift();
            if(Array.isArray(elem))
                res.push(...elem);
            else
                res.push(elem);
        }
        val--;
        arr=res;
    }
    return arr;
}
console.log(selfflat(fruits2,2));


//flatMap() method
console.log(fruits.flatMap(x => [[x * 2]]));
//Self implementation of flatMAP() method
var mul2=(x) => [[x * 2]];
function selfflatMap(arr)
{
    var stack=[]
    arr.forEach(function(elem)
    {
    stack.push(mul2(elem));}
    );
    res=[]
    while(stack.length)
    {
       var elem= stack.shift();
       if(Array.isArray(elem))
            res.push(...elem);
       else
           	res.push(elem);
     }
    return res;
}
console.log(selfflatMap(fruits));


//some() method
var sb=fruits.some(x=> x > 20);
console.log(sb);
//Self implementation of some() method
var fid;
var selffind=(element)=> element >20;
var sd=false;
for(var i=0; i< fruits.length; i++)
{
	if(selffind(fruits[i]))
    {
    	sd=true;
        break;
    }
}
console.log(sd);
