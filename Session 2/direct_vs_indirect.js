
// Local vs Global
//const dudesName = "Pepe"

function nameGenerator(nickName){
    return "Mr. " + nickName
}

// Indirect

function indirectGreeter(nickname, myFunction) {
    const dudesName =  myFunction(nickname)
    console.log(`What's up ${dudesName}? How u doin?`)
}

indirectGreeter('Pato', nameGenerator)


// Direct
function directGreeter(nickName) {
    const dudesName =  nameGenerator(nickName)
    console.log(`What's up ${dudesName}? How u doin?`)
}

directGreeter('Pato')

// Local vs Global
// console.log(dudesName)

