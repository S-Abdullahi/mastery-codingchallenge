'use strict';

function fruit(apples, oranges){
    const juice = `juice made of ${apples} apple and ${oranges}`
    return juice
}

let fruitJuice = fruit(5,4)
let fruitJuice2 = fruit(6,7)
console.log(fruitJuice)
console.log(fruitJuice2)

const myAge = function (birthyear){
    return 2022 - birthyear
}

let showAge = myAge(1995)
console.log(showAge)

let calcAge = (firstName, birthYear) => {
   let  age = 2022 - birthYear
   let  retirement = 65 - age

    return `${firstName} will retire at ${retirement}`
}

let detail = calcAge('Abdullahi', 1995)
console.log(detail)

// function inside a function
function cutFruit(fruit){
    return fruit * 4
}

function foodProcessing(apple,orange){
    const appleProcess = cutFruit(apple)
    const orangeProcess = cutFruit(orange)

    const juice = `the juice is made of ${appleProcess} apples and ${orangeProcess} oranges`

    return juice
}

console.log(foodProcessing(4,5))

// coding challenge 1 and challenge 2
let markHeight = 78
let marksWeight = 1.69

let johnHeight = 92
let johnWeight = 1.95

const markBMI = marksWeight/ markHeight ** 2
const johnBMI = johnWeight/ johnHeight ** 2

if(markBMI > johnBMI){
    console.log(`Mark'\s BMI is higher than john'\s BMI `) } else{
        console.log(`John'\s BMI is higher than Mark'\s BMI `)
    }


console.log(`mark BMI ${markBMI} and john BMI ${johnBMI}`)

console.log(markBMI> johnBMI)