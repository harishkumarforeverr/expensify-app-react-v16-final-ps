// const arr=["navipet","nzb","hyderabad","india"];

// const [,city="bengalore",state]=arr;

// console.log(`i live in ${city} at ${state}`);

const arr=["coffee(hot)",10,20,30];

const [coffee,,price]=arr;

console.log(`A medium ${coffee} cost ${price}`);







// const person={
//     name:"harish",
//     age:21,
//     loc:{
//        city:"nzb",
//        temp:99
//     }
// }

// const {name:fname="Anonymous",age}=person;

// console.log(`i am ${fname}, ${age} year old  `);

// const {city,temp:tempature}=person.loc;

// console.log(`${tempature} tempature in my ${city}`);

// const book={
//     title:"ego is enemy",
//     author:"harish",
//     publisher:{
//         // name:"iit kanpur"
//     }
// }

// const {name:publisherName="selfPublisher"}=book.publisher;

// console.log(publisherName)