function gradeProcessor(grades) {
    for (let index = 0; index < grades.length; index++) {
        if (grades[index] >= 90 && grades[index] <= 100) {
            grades[index] = "A"
        } else if (grades[index] >= 80 && grades[index] < 90)  {
            grades[index] = "B"
        } else if (grades[index] >= 70 && grades[index] < 80) {
            grades[index] = "C"
        } else if (grades[index] >= 60 && grades[index] < 70) {
            grades[index] = "D"
        } else if (grades[index] < 60 && grades[index] > 0) {
            grades[index] = "F"
        } else {
            console.log(grades[index])
            grades[index] = "error"
        }
        
        console.log(grades[index])
    }
    console.log(grades)
}



// Ejemplo
gradeProcessor([
    90, 95, 80, 96, 76, 74, 102, 86, 100, 67, 40, 88, 69, 70, -1, 98,
])