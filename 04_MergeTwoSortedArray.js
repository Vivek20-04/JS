let SortArray1 = [1, 3, 5];
let SortArray2 = [2, 4, 6];
const mergeArray = [...SortArray1, ...SortArray2]; 

// console.log(mergeArray.sort())

function Merge(mA) {
    for (let i = 0; i < mA.length; i++) {
        for (let j = 0; j < mA.length - i - 1; j++) { 
            if (mA[j] > mA[j + 1]) { 
                let temp = mA[j];
                mA[j] = mA[j + 1];
                mA[j + 1] = temp;
            }
        }
    }
    return mA;
}

console.log(Merge(mergeArray)); 
