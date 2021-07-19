///1

function calculateTotalPrice(orderedItems) {
 let totalPrice = 0;
 orderedItems.forEach((number) => {
 // console.log(number); - there are nums of array - 12,85,37,4,164...
    totalPrice += number;
   });

  return totalPrice;
}
 
///2
  
function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Пиши код ниже этой строки
  
  numbers.forEach((number)=>{
 if (number > value){
  filteredNumbers.push(number);}
  })
 
    // Пиши код выше этой строки
    return filteredNumbers;
}
  
///3
function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Пиши код ниже этой строки
  
   
   firstArray.forEach((number) => {
   if (secondArray.includes(number)) {
 commonElements.push(number);
  }
   });
    return commonElements;
    // Пиши код выше этой строки
}
  
///4
const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

///5
const calculateTotalPrice = (quantity, pricePerItem) => 
  quantity * pricePerItem;

///6
const calculateTotalPrice = (orderedItems)=> 

 {
  let totalPrice = 0;

  orderedItems.forEach((item)=> {
    totalPrice += item;
  });

  return totalPrice;
}

///7
 
const filterArray=(numbers, value)=> {
    const filteredNumbers = [];
  
    numbers.forEach((number)=> {
      if (number > value) {
        filteredNumbers.push(number);
      }
    });
  
    // Пиши код выше этой строки
    return filteredNumbers;
}

///8
// Пиши код ниже этой строки
const getCommonElements=(firstArray, secondArray)=> {
    const commonElements = [];
  
    firstArray.forEach((element)=> {
      if (secondArray.includes(element)) {
        commonElements.push(element);
      }
    });
  
    // Пиши код выше этой строки
    return commonElements;
}

///9
function changeEven(numbers, value) {
    // Пиши код ниже этой строки
  const newArray = [];
  numbers.forEach((number) => {
    
    if (number % 2 === 0) {
      number += value;
    }
    newArray.push(number);
  });
     return newArray; 
};
    
///10
const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// Пиши код ниже этой строки
const planetsLengths = planets.map((item) => item.length);

///11
const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
  ];
  // Пиши код ниже этой строки
  
const titles = books.map(book => book.title);

console.log(titles);

///12
const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика']
    }
  ];
  // Пиши код ниже этой строки
  
const genres = books.flatMap((books) => books.genres);
  
///13
const getUserNames = users => users.map((user) => user.name);

///14
const getUserEmails = users => users.map((user) => user.email);

///15
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Пиши код ниже этой строки

const evenNumbers = numbers.filter( number => number % 2  ===0);
const oddNumbers = numbers.filter(number => number % 2 !== 0);

///16

const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика', 'мистика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика', 'приключения']
    }
  ];
  // Пиши код ниже этой строки
  const  allGenres= books.flatMap(book => book.genres);
  const uniqueGenres = allGenres.filter(
    (genres, index, array) => array.indexOf(genres) === index);
  
///17
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];

const MIN_RATING = 8;
const AUTHOR = 'Бернард Корнуэлл';
// Пиши код ниже этой строки

const topRatedBooks = books.filter((book ) =>  book.rating >= MIN_RATING );
const booksByAuthor = books.filter((book) => book.author === AUTHOR);

///18
const getUsersWithEyeColor = (users, color) => {
return users.filter((user)=>user.eyeColor===color
);
};

///19
const getUsersWithAge = (users, minAge, maxAge) => {
 
return users.filter((user)=> user.age >= minAge && user.age <= maxAge
);


};

///20
const getUsersWithFriend = (users, friendName) => 
 
 
users.filter((user)=> user.friends.includes(friendName)
  );


///21

const getFriends = (users) =>
  users.flatMap((user) => user.friends).filter((friend, index, array) => array.indexOf(friend) === index);


///22
const getActiveUsers = (users) => 
  
  users.filter((user) => user.isActive);
 

///23
  const getInactiveUsers= (users) => 
  
  users.filter((user) => !user.isActive);
  
///24
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
];
const BOOK_TITLE = 'Сон смешного человека';
const AUTHOR = 'Роберт Шекли';
// Пиши код ниже этой строки

const bookWithTitle = books.find((book) => book.title === BOOK_TITLE); 
const bookByAuthor = books.find((book) => book.author === AUTHOR);

///25

const getUserWithEmail=(users, email)=> 
  users.find((user) => user.email  === email);
















