//1. Cambiar el titulo:
const titulo = document.querySelector("h1"); // Cambia "h1" al selector correspondiente

titulo.textContent = "Generasión 1 Pokimon";


// 2. elemento cuyo fondo quieres cambiar
let elemento = document.querySelector("h1"); 

// Cambia el color de fondo
elemento.style.backgroundColor = "aquamarine"; 


// 3. Imprimir URL:

console.log(window.location.href);

//4. imprimir dominio de la pagina:

console.log(window.location.hostname);

//  5. Nodos de la imagen:
// Selecciona todas las imagenes
const imagen = document.querySelectorAll("img"); 
console.log("Nodo de imagen:", imagen);

// 6. Sustituir el atributo src
// Seleccionar  todas las imágenes en la página
const imagenes = document.querySelectorAll("img");

// cambia su atributo "src"
imagenes.forEach(img => {
    img.src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
});

// 7. Cambia el fondo de todos los `infocard-lg-data text-muted` para todos los Pokimon voladores `itype flying`

// Selecciona todos los elementos con la clase "infocard-lg-data text-muted"
const elementos = document.querySelectorAll(".infocard-lg-data.text-muted");


elementos.forEach(elemento => {
    // Busca los elementos Pokimon voladores ("itype flying")
    if (elemento.querySelector(".itype.flying")) {
        // Cambia el color de fondo
        elemento.style.backgroundColor = "yellow"; 
    }
});
