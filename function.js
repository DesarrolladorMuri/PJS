/*Esta funcion es escuchada por un boton el cual muestra un mensaje predeterminado que se rige por medio de una clase.
function mensajeEnPantalla() {
    const text = document.querySelector("p.harcord.hard");
    text.innerHTML = "Welcome a new edit";
}

//Esta funcion escucha por un boton el cual muestra un nuevo mensaje por medio de un id.
function mensajeEnPantalla() {
    const text = document.querySelector("p#harcord");
    text.innerHTML = "I am the new text";
}*/

// //Acceder a multioples elementos
// function displayItem() {
//     const el = document.querySelector("li");
//     const p = document.querySelector("p");
//     p.innerText = el.innerHTML;
// }

//Contar elementos
function displayItem() {
    const el = document.getElementsByTagName("li");
    const div = document.querySelector("div");
    div.innerHTML = el.length;
}