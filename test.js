console.log("hello");

//pending, resolved, rejected

//resolve ==> success
//reject ==> failure

 let mypromise=new Promise((resolve,reject)=>{
       
    // resolve("yes success")
    // reject("failed")

    setTimeout(()=>{
        reject("timeout finished")
    },1000)
 })

//  mypromise.then((res)=>{
//     console.log("the result",res)
//  }).catch((err)=>{
//     console.log(err)
//  })


 async function getData(params) {
    try {
        let res= await mypromise;
        console.log(res)
    } catch (error) {
        console.error("error", error)
    }
 }

 getData()