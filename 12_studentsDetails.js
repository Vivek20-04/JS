//Create an array of student objects with below attributes
const studentDetails = [
    {
        name: "Vivekrawal",
        age: 21,
        grade: "A"
    },
    {
        name: "Deepak",
        age: 22,
        grade: "A"
    },
    {
        name: "Joshi",
        age: 21,
        grade: "C"
    },
    {
        name: "Dhimmar",
        age: 26,
        grade: "B"
    }

]
console.log("Default ArrayObject", studentDetails)

//Adding a new student to the array
studentDetails.splice(0, 0, { name: "rawal", age: 21, grade: "B" })
console.log("Adding an array", studentDetails)

//Removing the last student from the array
studentDetails.pop()
console.log("After Removing", studentDetails)


//Updating a student's grade
studentDetails.forEach((x) => {
    if (x.name == "Joshi" && x.age == 21) {
        x.grade = "A"
    }
})
console.log("Updating grade of student", studentDetails[3])
console.log("\n")

//Logging(log/print all the student name) all students
for (let i = 0; i < studentDetails.length; i++) {
    console.log("Name of Students ", studentDetails[i].name)
}
console.log("\n")

//other array methods
studentDetails.forEach((x) => console.log("Using Array method ", x.name))

console.log("\n")

//Finding a student with grade 'A'
for (let i = 0; i < studentDetails.length; i++) {
    if (studentDetails[i].grade == "A") {
        console.log("Student with A grade", studentDetails[i].name)
    }
}
console.log("\n")

//Calculating average student age 
let sumAge = 0;
studentDetails.forEach((x) => {
    sumAge += x.age
})
const avgAge = (sumAge / studentDetails.length)
console.log("Average Age of Students ", parseInt(avgAge))



//using map 
const map = studentDetails.map((x) => {
    if (x.name == "rawal")
        console.log("Using Array method ", x.name)
})

console.log("Map variable ",map)
console.log(map.length)
console.log("\n")

//Using slice
console.log(studentDetails.slice(0, 3))

//Filter

const x = studentDetails.filter((x) => {
    if (x.age == 21)
        console.log("Using Array method ", x.name,)
})
console.log("\n")


