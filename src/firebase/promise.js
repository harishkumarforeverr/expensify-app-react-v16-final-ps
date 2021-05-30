const promise=new Promise((resolve,reject)=>{ 
      setTimeout(()=>{
        resolve({
			name:"harish",
			age:21
		});  
      },5000);
}) 

promise
.then((data)=>{
    console.log(data);
     return new Promise((resolve,reject)=>{
     resolve("my new kkkkkkkkkkkkkkkkkkk");
  });
})
.then((str)=>{
      console.log("---------------------",str);
    console.log("Does these resolved 2nd time alsso",str)
})
.catch((error)=>console.log("gari",error))
 
