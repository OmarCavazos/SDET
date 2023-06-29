function findLargest(num1, num2, num3) {
    if (num1 > num2) {
        console.log(num1 + " is the largest")
    } else if (num2 > num3){
        console.log(num2 + " is the largest")
    } else {
        console.log(num3 + " is the largest")
        
    }
}


Ejemplos:
//findLargest(21,45,13) // 45
//findLargest(34,18,52) // 52
findLargest(72,45,25) // 45