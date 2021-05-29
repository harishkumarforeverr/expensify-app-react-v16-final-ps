import firebase from "firebase/app"; 
import "firebase/database";
import "firebase/auth";
   
  //firebaseConfig
  var firebaseConfig = {
    apiKey: "AIzaSyAQAY2_BTNpgMt9xGwI7AnLtlvYY7CIAcE",
    authDomain: "expensify-app-2021-v15.firebaseapp.com",
    projectId: "expensify-app-2021-v15",
    storageBucket: "expensify-app-2021-v15.appspot.com",
    messagingSenderId: "86366805035",
    appId: "1:86366805035:web:b74d972c1011c91d829e6e",
    measurementId: "G-R1S7WKB35V"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // conecting database
 const database=firebase.database();
 
 // playing with database



/// ------------------------------------------------startof 9th videp  --------------------------------------- 

// 1st case

// const note=[
// {
//   id:1,
//   title:"job",
//   body:"lloking for fronted job"
// },{
//   id:2,
//   title:"marrriage",
//   body:"looking for fronted gril"
// }
// ]

// database.ref().set(note);


// 2nd case

// database.ref().push({
//   title:"laptop",
//   body:"looking for i7 laptop"
// })

// 2nd case a part
// database.ref().push({
//   title:"reactjs",
//   body:"andrew mead" 
// })
  


// 3rd case

// const expenses=[
//     { 
//         description:"Gun",
//         note:"",
//         amount:195,
//         createdAt:0
//     },
//     { 
//         description:"rent",
//         note:"",
//         amount:109500,
//         createdAt:2021
//     },
//     { 
//         description:"credit Card",
//         note:"",
//         amount:4500,
//         createdAt:987
//     }
// ]

// expenses.map((expense)=>{
//   database.ref("expenses").push(expense)
// })

//
/// ------------------------------------------------end of 9th videp  ---------------------------------------




/// ------------------------------------------------startof 10th videp  --------------------------------------- 

// on saving the exepnses on firebase


// 1st caase
// database.ref("expenses")
// .once("value")
// .then((snapshot)=>{
//      console.log(snapshot.val());
// })   

// 2nd case

// database.ref("expenses")
// .once("value")
// .then((snapshot)=>{
//     const expenses=[];
//     snapshot.forEach((childSnapshot)=>{
//       const key=childSnapshot.key;
//       expenses.push({
//        id:key,
//        ...childSnapshot.val()
//       })
//     })
//     console.log(expenses);
// })   


// 3rd case on data change 
//---------->>>>>> change the data in firebase thes fmethod should trigger

// database.ref("expenses")
// .on("value",(snapshot)=>{
//     const expenses=[];
//     snapshot.forEach((childSnapshot)=>{
//       const key=childSnapshot.key;
//       expenses.push({
//        id:key,
//        ...childSnapshot.val()
//       })
//     })
//     console.log(expenses);

// })    


// 4th case
// on child added

// database.ref().on("child_added",(snapshot)=>{
//   console.log(snapshot.key, snapshot.val());
// })


//child_removed
// database.ref("expenses").on("child_removed",(snapshot)=>{
//   console.log(snapshot.key, snapshot.val());
// })


// //child_changed
database.ref().on("child_changed",(snapshot)=>{
  console.log(snapshot.key, snapshot.val());
})

 


/// ------------------------------------------------startof 10th videp  --------------------------------------- 
























// 8th video start 
 // database.ref().set({
 //      name:"harish809",
 //      age:21,
 //      job:"software developer",
 //      location:{
 //          city:"hyderabad",
 //          country:"india"
 //      }
 //  }) 
 //   .then(()=>console.log("data is saved "))
 //  .catch((error)=>console.log("data is not saved",error))


// database.ref().update({
//   job:"Manager",
//   location:{
//     city:"new york"
//   }
// })


// database.ref().update({
//   job:"Manager",
//   "location/city" : "new york"
// })

// 2nd case
 // database.ref().set({
 //      name:"harish809",
 //      age:21,
 //      stresslevel:6,
 //      job: {
 //        title:"software developer",
 //        company:"Google"
 //      } ,
 //      location:{
 //          city:"hyderabad",
 //          country:"india"
 //      }
 //  }) 

// database.ref().update({
//       stresslevel:9,
//       "job/title" : "Amozan",
//       "location/city" : "london"
// })


// 3rd case 8th video
// database.ref().once("value")
// .then((snapshot)=>{
//   const value=snapshot.val();
//   console.log(value);
// })
// .catch((error)=>{
//   console.log("eror in reading the data");
// })


// database.ref("location").once("value")
// .then((snapshot)=>{
//   const value=snapshot.val();
//   console.log(value);
// })
// .catch((error)=>{
//   console.log("eror in reading the data");
// })

// database.ref("location/city").once("value")
// .then((snapshot)=>{
//   const value=snapshot.val();
//   console.log(value);
// })
// .catch((error)=>{
//   console.log("eror in reading the data");
// })


// 3rd case   condition : change the data in phone(firebase) mana e console messgae print kavali
// database.ref().on("value",(snapshot)=>{
//   const value=snapshot.val();
//   console.log(value);
// })

// 4th case
// database.ref().on("value",(snapshot)=>{
//   const value=snapshot.val();
//   console.log(value);
// })

// setTimeout(()=>{
//  database.ref("age").set(990);
// },4000)

// 5th case
// database.ref().on("value",(snapshot)=>{
//   const value=snapshot.val();
//   console.log(value);
// })

// setTimeout(()=>{
//  database.ref("age").set(990);
// },4000)

// setTimeout(()=>{ 
//  database.ref().off();
// },8000)

// setTimeout(()=>{
//  database.ref("age").set(9);
// },10000)



// 6th case

// const onValueChange=(snapshot)=>{
//   const value=snapshot.val();
//   console.log(value);
// }

// database.ref().on("value",onValueChange)

// setTimeout(()=>{
//  database.ref("age").set(990);
// },4000)

// setTimeout(()=>{ 
//  database.ref().off(onValueChange);
// },8000)

// setTimeout(()=>{
//  database.ref("age").set(9);
// },10000)


// 7th case  
// const onValueChange=database.ref().on("value",(snapshot)=>{
//   const value=snapshot.val();
//   console.log(value);
// })

// setTimeout(()=>{
//  database.ref("age").set(990);
// },4000)

// setTimeout(()=>{ 
//  database.ref().off(onValueChange);
// },8000)

// setTimeout(()=>{
//  database.ref("age").set(9);
// },10000)

// 8th case
// const onValueChange=database.ref().on("value",(snapshot)=>{
//   const value=snapshot.val();
//   console.log(value);
// },(e)=>{
//   console.log("some thing went wrong");
// })

// setTimeout(()=>{
//  database.ref("age").set(990);
// },4000)

// setTimeout(()=>{ 
//  database.ref().off(onValueChange);
// },8000)

// setTimeout(()=>{
//  database.ref("age").set(9);
// },10000)


// 9th case
// database.ref().on("value",(snapshot)=>{
//   const value=snapshot.val();
//   console.log(`${value.name} is a ${value.job.title} at ${value.job.company}`);
// })


// setTimeout(()=>{
//   database.ref().update({
//     name:"satish",
//     "job/title":"army",
//     "job/company":"indian company"
//   })
// },4000)

/// ------------------------------------------------end of 8th videp  ---------------------------------------


















// 1st case

// database.ref("isSingle")
//   .remove()
//   .then(()=>console.log("data is removed"))
//   .catch((error)=>console.log("data is not saved",error))


// database.ref()
//   .remove()
//   .then(()=>console.log("data is removed"))
//   .catch((error)=>console.log("data is not saved",error))

// database.ref("isSingle").set(null);



// 2nd case

// database.ref().update({
//   name:"satish",
//   age:"23"
// })



// database.ref().update({
//   name:"satish",
//   age:"23",
//   job:"software enginre"
// })


// database.ref().update({
//   name:"satish",
//   age:"23",
//   job:"software enginre",
//   isSingle:null
// })

























