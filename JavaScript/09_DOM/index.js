
// ------updated js-----




document.querySelector(".container")
// null


document.querySelector(".paraDiv")

/*<div class=​"paraDiv">​…​</div>​<p class=​"text-matter" id=​"spara">​Second Para​</p>​<p class=​"text-matter" id=​"tpara">​Third Para​</p>​<p class=​"text-matter" id=​"fopara">​Fourth Para​</p>​<p class=​"text-matter" id=​"fipara">​Fifth Para​</p>​</div>​*/


document.querySelector(".paraDiv").innerHTML
// '\n\n    \n    <p class="text-matter" id="spara">Second Para</p>\n    <p class="text-matter" id="tpara">Third Para</p>\n    <p class="text-matter" id="fopara">Fourth Para</p>\n    <p class="text-matter" id="fipara">Fifth Para</p>\n'

document.querySelector(".paraDiv").innerText
// 'Second Para\n\nThird Para\n\nFourth Para\n\nFifth Para'

document.querySelector(".paraDiv").innerElement
// undefined

document.querySelector(".text-matter").innerText = "first para using js"
// 'first para using js'

document.querySelector(".text-matter").innerHTML
// 'first para using js'

document.querySelector(".text-matter").outerHTML

// '<h1 id="fheading" class="text-matter">first para using js</h1>'

document.querySelector(".text-matter").outerText
// 'first para using js'

document.querySelector(".paraDiv").tagName
// 'DIV'

document.querySelector(".paraDiv").nodeName
// 'DIV'

document.querySelector(".paraDiv").textContent
// '\n\n    \n    Second Para\n    Third Para\n    Fourth Para\n    Fifth Para\n'

document.querySelector(".paraDiv").hidden
// false

document.querySelector(".paraDiv").hidden = true
// true

document.querySelector(".paraDiv")
//<div class=​"paraDiv" hidden>​…​</div>​

document.querySelector(".paraDiv").hidden = false
// false

document.querySelector(".paraDiv").hasAttribute("style")
// false


document.querySelector(".text-matter").hasAttribute("style")
// true

document.querySelector(".text-matter").getAttribute("style")
// 'display: flex;'
.

document.querySelector(".text-matter").setAttribute("style","display:inline")
// undefined


document.querySelector(".text-matter").attributes
//NamedNodeMap {0: id, 1: class, 2: style, id: id, class: class, style: style, length: 3}

document.querySelector(".text-matter").removeAttribute("style")
// undefined


document.querySelector(".paraDiv")
//<div class=​"paraDiv red green blue voilet">​…​</div>​


document.querySelector(".paraDiv").className
//'paraDiv red green blue voilet'


document.querySelector(".paraDiv").classList
//DOMTokenList(5) ['paraDiv', 'red', 'green', 'blue', 'voilet', value: 'paraDiv red green blue voilet']



document.querySelector(".paraDiv").classList.add("beige")
//undefined

document.querySelector(".paraDiv").classList.remove("beige")
//undefined

document.querySelector(".paraDiv").classList.toggle("beige")
//true

document.querySelector(".paraDiv").classList.toggle("beige")
//false

let div = document.createElement("div")
div.innerHTML = "i am the new div inserted by js dynamically"
div.setAttribute("class","newDiv")
// document.querySelector(".paraDiv").append(div)
// document.querySelector(".paraDiv").prepend(div)
// document.querySelector(".paraDiv").after(div)
// document.querySelector(".paraDiv").before(div)

let cont = document.querySelector(".paraDiv")
// cont.insertAdjacentHTML("afterbegin","<b>Ravindra singh</b>")
// cont.insertAdjacentHTML("afterend","<b>Ravindra singh</b>")
// cont.insertAdjacentHTML("beforebegin","<b>Ravindra singh</b>")
// cont.insertAdjacentHTML("beforeend","<b>Ravindra singh</b>")


// let classNames = document.querySelector(".text-matter").className






































































// let firstDiv = document.querySelector(".paraDiv")
// console.log(firstDiv);

// let firstElement = document.createElement("h2");
// console.log(firstElement);
// firstElement.textContent = "Ravindra singh"
// console.log(firstElement);

// firstDiv.insertAdjacentElement("beforeBegin",firstElement)
// firstDiv.insertAdjacentElement("afterEnd",firstElement)
// firstDiv.insertAdjacentElement("afterBegin",firstElement)
// firstDiv.insertAdjacentElement("beforeEnd",firstElement)




// ----Removal of element 
// let parent = document.querySelector(".paraDiv")
// let child = document.querySelector("#fpara")

// parent.removeChild(child)



// let firstDiv = document.querySelector(".paraDiv")
// console.log(firstDiv);

// let firstElement = document.createElement("h2");
// console.log(firstElement);
// firstElement.textContent = "Ravindra singh"
// console.log(firstElement);

// firstDiv.insertAdjacentElement("beforeBegin",firstElement)
// firstDiv.insertAdjacentElement("afterEnd",firstElement)
// firstDiv.insertAdjacentElement("afterBegin",firstElement)
// firstDiv.insertAdjacentElement("beforeEnd",firstElement)




// ----Removal of element 
let parent = document.querySelector(".paraDiv")
let child = document.querySelector("#fpara")

parent.removeChild(child)