//  6/19 через класс

class  Storage{
  constructor(items = []) {
    this.items = items;}
  
getItems() {
  return this.items;}

addItem(newItem) {
if ( newItem !== undefined && !this.items.includes(newItem)) 
   this.items.push(newItem);}

removeItem(item) {
 let position = this.items.indexOf(item);
 if (position > 0) {
 this.items.splice(position, 1); }}}

// Пиши код выше этой строки
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


// 6/19 через функцию
function Storage(items) {
  this.items = items;
}
Storage.prototype.getItems = function (items) {
  return this.items;
};
Storage.prototype.addItem=function(newItem) {
if ( newItem !== undefined && !this.items.includes(newItem)) 
    this.items.push(newItem);
}
Storage.prototype. removeItem=function(item) {
 let position = this.items.indexOf(item);
 if (position > 0) {
    this.items.splice(position, 1);
  }
}
 // Пиши код выше этой строки
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

/// 7/19
function StringBuilder(baseValue) {
  this.value = baseValue ;
}
StringBuilder.prototype.getValue = function (value) {
return this.value ;
};
StringBuilder.prototype.padEnd=function(str){
this.value =this.value+ `${str}`;
}
StringBuilder.prototype.padStart=function(str) {
this.value =`${str}` + this.value;
}
StringBuilder.prototype.padBoth =function(str){
this.value =`${str}` + this.value+`${str}`;
}

// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='

/// 9/19

class Car {
  brand;
  model;
  price;
  
constructor({ brand, model ,price }) {
   
    this.brand =brand;
    this.model = model;
     this.price = price;
  }
}

///10/19

  
class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  
   getPrice() {
    return this.price ;
  }

  changePrice(newPrice) {
  return  this.price  = newPrice ;
  }
}

/// 11/19
class Car {
  #brand;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
    getBrand() {
    return this.#brand;
  }

  changeBrand(newBrand) {
    this.#brand = newBrand;
  }
}

/// 12/19
class Storage{
  #items;
  constructor(items) {
   this.#items=items;
   }
  
    getItems() {
    return this.#items;
  }
  
    addItem(newItem) {
this.#items.push(newItem);
  }
  
   removeItem (item) {
const itemIndex = this.#items.indexOf(item);
this.#items.splice(itemIndex, 1);
   }
 }

// Пиши код выше этой строки
const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem("Дроид");
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem("Пролонгер");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


/// 13/19
class StringBuilder {
  #value;
  constructor(baseValue) {
   this.#value = baseValue;
  }

getValue() {
  return this.#value;
};

padEnd(str) {
  this.#value += str;
};
  
padStart(str) {
  this.#value = str + this.#value;
};

padBoth(str) {
  this.padStart(str);
  this.padEnd(str);
};
}

// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='


/// 14/19
class Car {
  #model;
  #price;
  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

 set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
}

///15/19
class Car {
  // Пиши код ниже этой строки
  static MAX_PRICE=50000;
  #price;
  
 constructor({ price }) {
    this.#price = price;
     }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
      if (Car.MAX_PRICE < newPrice) {
          return;  
    }

     this.#price =newPrice;
  }
      
  }
  // Пиши код выше этой строки
const audi = new Car({price: 35000});
console.log(audi.price); // 35000

//// 16/19

class Car {
  static #MAX_PRICE = 50000;
  // Пиши код ниже этой строки
 static checkPrice(price) {
   if (price > Car.#MAX_PRICE)
   {return`Внимание! Цена превышает допустимую.`
                                  ;}
   
    return `Всё хорошо, цена в порядке.`;
  }
  // Пиши код выше этой строки
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

/// 17/19
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
// Пиши код ниже этой строки
class Admin extends User {
    static AccessLevel = {
        BASIC: "basic",
        SUPERUSER: "superuser",
    };
}

/// 18/19
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  // Пиши код ниже этой строки
accessLevel;
  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };
  constructor({email, accessLevel}){
    super(email);
    this.accessLevel= accessLevel;
    
  }
  

  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser

/// 19/19

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Пиши код ниже этой строки

  
  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };

  accessLevel;

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;  }
 blacklistedEmails =[]; 
  
 blacklist (email){ 
this.blacklistedEmails.push(email);
 };
 
 isBlacklisted(email){
  if(this.blacklistedEmails.includes(email)){
  return true;
  }
    return false;  }
  ;

  // Пиши код выше этой строки
}
const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser
mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // 'poly@mail.com'
console.log(mango.isBlacklisted('mango@mail.com')); //  false
console.log(mango.isBlacklisted('poly@mail.com')); // true 

//////
