let cont = document.childNodes
cont
/*
NodeList(2) [<!DOCTYPE html>, html]
23[Deprecation] The 'textprediction' attribute will be removed in the future. Use the 'writingsuggestions' attribute instead. See <URL> for more information.
*/
/*
let cont = document.body.childNodes
cont
NodeList(9) [text, div.container, text, script, text, comment, text, script, text]0: text1: div.container2: text3: script4: text5: comment6: text7: script8: textlength: 9[[Prototype]]: NodeList
*/
/*
let cont = document.body.firstElementChild
cont
<div class=​"container">​…​</div>​
*/
/*
let cont = document.childNodes[2]
cont
undefined
*/
/*
let cont = document.childNodes
cont
NodeList(2) [<!DOCTYPE html>, html]
*/
/*
let cont = document.body.childNodes
cont
NodeList(9) [text, div.container, text, script, text, comment, text, script, text]
*/
/*
let cont = document.body.childNodes[2]
cont
#text
*/
/*
let cont = document.body.childNodes
cont
NodeList(9) [text, div.container, text, script, text, comment, text, script, text]
*/
/*
let cont = document.body
cont
<body data-new-gr-c-s-check-loaded=​"14.1077.0" data-gr-ext-installed>​…​</body>​
*/
/*
let cont = document.body.childNodes
cont
NodeList(9) [text, div.container, text, script, text, comment, text, script, text]
*/
/*
let cont = document.body.childNodes
cont
NodeList(9) [text, div.container, text, script, text, comment, text, script, text]
*/
/*
let cont = document.body.childNodes[1].childNodes
cont
NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
*/
/*
let cont = document.body.childNodes[1].firstChild
cont
#text
*/
/*
let cont = document.body.childNodes[1].firstElementChild
cont
<div class=​"box">​Box1​</div>​
*/
/*
let cont = document.body.childNodes[1].lastChild
cont
#text
*/
/*
let cont = document.body.childNodes[1].lastElementChild
cont
<div class=​"box">​Box5​</div>​
*/

/*
let cont = document.body.childNodes
cont
NodeList(9) [text, div.container, text, script, text, comment, text, script, text]
*/
/*
cont[1]
<div class=​"container">​…​</div>​
*/
/*
cont[1].firstElementChild
<div class=​"box">​Box1​</div>​
*/
/*
cont[1].lastElementChild
<div class=​"box">​Box5​</div>​
*/
/*
cont[1].firstElementChild.style.backgroundColor = "gray"
'gray'
*/
/*
cont[1].firstElementChild.style.Color = "white"
'white'
*/
/*
cont[1].firstElementChild.style.color = "white"
'white'
*/
/*
cont[1].firstElementChild.parentElement
<div class=​"container">​…​</div>​
*/
/*
cont[1].firstElementChild.nextElementSibling
<div class=​"box">​Box2​</div>​
*/
/*
cont[1].firstElementChild.previousElementSibling
null
*/
/*
cont[1].lastElementChild.previousElementSibling
<div class=​"box">​Box4​</div>​
*/
/*
cont[1].lastElementChild.previousElementSibling
<div class=​"box">​Box4​</div>​
*/
/*
cont[1].childNodes
NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
*/
/*
cont[1].childNodes[3]
<div class=​"box">​Box2​</div>​
*/
/*
cont[1].childNodes[3].nextElementSibling
<div class=​"box">​Box3​</div>​
*/
/*
cont[1].childNodes[3].previousElementSibling
//<div class=​"box" style=​"background-color:​ gray;​ color:​ white;​">​Box1​</div>​
cont[1].childNodes[3].previousSibling
//#text
*/
/*cont[1].childNodes[3].nextSibling
//#text

*/
/*
cont[1].childNodes.childern
//undefined

*/
/*
cont[1].childNodes
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
*/
/*
cont[1].children
// HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]
*/