    let studentDetails = [
        {
            name: "Vivekrawal",
            age: 21,
            grade: "A"
        },{
            name: "Vivekrawal",
            age: 21,
            grade: "A"
        }
    ];

    console.log("Default Array of Object:", studentDetails);
    // studentDetails.push({
    //     name: "Vivekrawal", bbbbbb
    //     age: 21,
    //     grade: "A"
    // })
    const addElement = (Arr, element, index) => {
        let NewArr = [];
        if (index < 0 || index > Arr.length) {
            index = Arr.length; 
        }

        for (let i = 0; i < index; i++) {
            NewArr[i] = Arr[i];
        }
        NewArr[index] = element;

        for (let i = index; i < Arr.length; i++) {
            NewArr[i + 1] = Arr[i];
        }

        return NewArr;
    };

    var updatedArray = addElement(studentDetails, {
        name: "Temp",
        age: 24,
        grade: "C"
    },3);

    console.log("After Adding Object:", updatedArray);
    console.log("Original Array", studentDetails);

    const removeElement = (Arr, index) => {
        let NewArr = [];
        if (index < 0 || index >= Arr.length) {
            console.log("Invalid Index");
            return Arr
        }
        for (let i = 0; i < index; i++) {
            NewArr[i] = Arr[i];
        }
        for (let i = index + 1; i < Arr.length; i++) {
            NewArr[i - 1] = Arr[i];
        }

        return NewArr;
    };

    var updatedRemoveArray = removeElement(studentDetails, 0);
    console.log("After Removing Object:", updatedRemoveArray);
    console.log("Original Array After Remove Function Call:", studentDetails);
