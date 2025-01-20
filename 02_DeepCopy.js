let defaultArray = [{nume: 1},{num: 2},1,2,3,"VivekRawal"]
console.log('\ndefaultArray: ',defaultArray)


//Created an Deep Copy 
let deepCopy = JSON.parse(JSON.stringify(defaultArray))
deepCopy[2]=5
console.log("\nAfter transfering object format data into JSON format",deepCopy)
console.log('\ndefaultArray: ',defaultArray)
// //Back to Default Array Form from JSON
// let OriginalCopy = JSON.parse(deepCopy)
// console.log("\nBack to Original form ",OriginalCopy)