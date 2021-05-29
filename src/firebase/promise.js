const promise=new Promise((resolve,reject)=>{ 
      // resolve({
			// name:"harish",
			// age:21
		// }); 
		reject("something went wrong IIIIIIIIIIIII");
}) 

promise.then((data)=>{
    console.log(data);
},(error)=>console.log("gari",error))
 
