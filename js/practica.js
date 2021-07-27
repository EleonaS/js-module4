///17.07.2021 c Alyona
////
const a = ["a","b","c"];
const b = [1, [2, 3]];
const c = 0;
///my
//const result = [...a,0,...b].flat(1)
//console.log(result)


///1metod
//const bb = b.pop().concat(b.shift());
/*const bbb = b.shift();*/
//const result = a.concat(c, bb)
//console.log(result)

///2metod
const bb = [b[0]].concat(b[1])
const result = a.concat(c, bb)
console.log(result)
////


////
const a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

const result


///result = ['a', 'b', 'c', 'a', 'b', 'c', 'g', 'h']



