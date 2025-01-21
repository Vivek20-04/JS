let matrix=[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    ]  

    // [
    //     [7, 4, 1],
    //     [8, 5, 2], 
    //     [9, 6, 3]
    //     ] 
    
    let newArr= [[],[],[]]
    function rotateMatrix(rM){
        
        for(let i =0;i<=rM.length-1 ;i++){
            for(let j = rM.length-1 ; j>=0 ; j--){
                newArr[i].push(rM[j][i])
            }
        }
        return newArr
    }

    console.log(rotateMatrix(matrix))