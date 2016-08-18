let hola = () => ('hola!');
let text = document.createTextNode(hola());
document.getElementById("app").appendChild(text);
console.log(hola());