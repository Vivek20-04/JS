let defaultArray = [1,2,{name:['Rawal']}]

    let shallowCopy = Array.from(defaultArray)
    console.log(shallowCopy)
    console.log("Default Copy",defaultArray);

    // //After Updating 
    // shallowCopy[0]=3
    // shallowCopy[2].name="Vivek"
    // console.log("\n After Updating top-level Properties & Nested Properties",shallowCopy)
    // console.log("Default Array",defaultArray)
    console.log("\n")


    // //spread 
    // const shallCo1=new Array(...defaultArray)
    // console.log("With Spread",shallCo1)
    // shallCo1[0]=3
    // shallCo1[2].name="Cr"
    // console.log("After Updating top-level Properties & Nested Properties",shallCo1)
    // console.log("Default Array",defaultArray)
    // console.log("\n")

    // //Slice
    // const shallCoSlice =  defaultArray.slice(0,4)
    // console.log("Slice :",shallCoSlice)
    // shallCoSlice[0]=3
    // shallCoSlice[2].name="VR"
    // console.log("After Updating top-level Properties & Nested Properties",shallCoSlice)
    // console.log("Default Array",defaultArray)

    console.log("\n");
    //Concat
    const shallCoConcat =  defaultArray.concat("1")
    console.log("Concat :",shallCoConcat)
    shallCoConcat[0]=6
    shallCoConcat[2].name="Cr"
    
    console.log("After Updating top-level Properties & Nested Properties",shallCoConcat)
    console.log("Concat :",shallCoConcat)
    