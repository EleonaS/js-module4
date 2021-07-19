/*const fnA = function (message, callback) {
//  console.log(message);
 // console.log(callback);
  callback()

}
const fnB =function(){
//console.log('Это лог при вызове fnB');
}
fnA('hello', fnB)

const doMath = function (a, b, callback) {
  const result = callback(a, b);

 //console.log(result);
}

 // const add = function(x,y) {
//    return x + y;
 // }
 // const sub = function(x,y) {
 //   return x - y;
 // }
doMath(2, 3, function(x,y){
    return x + y;
  })
doMath(2, 3, function(x,y){
    return x - y;
  })

/////
  const filter = function (array, test) {
  const filteredElements = [];

  for (const element of array) {
    const passed = test(element);

    if (passed) {
      filteredElements.push(element);
    }
  }

  return filteredElements;
};

const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 100, isFresh: true },
];

const freshFruits = filter(fruits, fruit => fruit.isFresh);
//console.log(freshFruits); // массив с объектами apples и bananas

const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
//console.log(fruitsWithQuantity); // массив с объектами apples и grapes

///// Геолокация
const onGetPositionSuccess = function (position) {
  console.log('Это вызов onGetPositionSuccess')
  console.log(position);
  
};
const onGetPositionError = function (error) {
//  console.log(error);
};

window.navigator.geolocation.getCurrentPosition(onGetPositionSuccess, onGetPositionError);
//////
*/
//const filter = function (array, test) {
 /// const filteredArray = [];
/*
  for (const el of array) {
    console.log(el);
    console.log(test(el));
  }

  return filteredArray;
};

const callback1 = function (value) { return value >= 3;}
const r1 = filter([1, 2, 3, 4, 5],callback1);
consol.log(r1);

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8],callback2);
consol.log(r2);
*/
///////
/*
const pizzaPalace = {
  pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
  order(pizzaName,onSuccess,onOrderError) {
  for (const pizza of this.pizzas){
      if (pizza === pizzaName)  {
    return onSuccess(pizzaName); }
  }
   return onError (`В ассортименте нет пиццы с названием  ${pizzaName}.`);
  },
};
// Пиши код выше этой строки

// Колбэк для onSuccess  */




//4modul bot 
//const orders = [
//  { email: 'solomon@topmail.ua', dish: 'Burger' },
//  { email: 'artemis@coldmail.net', dish: 'Pizza' },
//  { email: 'jacob@mail.com', dish: 'Taco' },
//];

// Пиши код ниже этой строки
//function composeMessage(position) {
//return messages=`Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}//-й в очереди.`}

//const messages = [];
//for (let i=0; i<orders.length; i++){
//  messages.push(composeMessage.call(orders[i], i + 1))
//}
