const objC = {
  z: 5
}

const objB = Object.create(objC)
objB.y = 10;

console.log(objC)
console.log(objB)
console.log(objB.y)
console.log(objB.z)

const objA = Object.create(objB)
objA.x = 20;
objA.z = 100;
console.log(objA)
console.log(objA.x)
console.log(objA.z)


//function-constuctor

const Car= function () {
 
  console.log(this)
  
}
const myCar = new Car();
console.log(myCar)