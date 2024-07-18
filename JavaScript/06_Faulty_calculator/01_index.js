
let random = Math.random()
let a = prompt("Enter the first numer: ")
let b = prompt("Enter the second numer: ")
let c = prompt("Enter the operator: ")


let obj = {
    "+":"-",
    "-":"/",
    "*":"+",
    "/":"*"
}

if(random>0.1){
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}