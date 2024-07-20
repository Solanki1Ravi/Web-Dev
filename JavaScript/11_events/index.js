
// function changeText() {
//     let fpara = document.getElementById("fpara");
//     fpara.textContent = "Namaste"
    
// }
// let fpara = document.getElementById("fpara");
// fpara.addEventListener("click",changeText)

// fpara.removeEventListener("click",changeText)

// monitorEvents(document)

function preventAnchor1(event) {
    event.preventDefault();
    anchorElement.textContent = "Click done"

}
let anchorElement = document.getElementById("fanchor");



anchorElement.addEventListener("click",preventAnchor1)

