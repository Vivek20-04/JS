let val1=5
console.log(val1)

setTimeout(()=>{
        console.log("Callback1")
},1000)

// new Promise((resolve,reject)=>{
//     let result=true
//     if(result){
//         return resolve("Resolved")
//     }
//     else
//         return reject("Error")
// }).then((resolve)=>{
//     console.log(resolve)
// }).catch((reject)=>{
//     console.log(reject)
// })


new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let result=true
    if(result){
        return resolve("Resolved")
    }
    else
        return reject("Error")
    },5000)
}).then((resolve)=>{
    console.log(resolve)
}).catch((reject)=>{
    console.log(reject)
})