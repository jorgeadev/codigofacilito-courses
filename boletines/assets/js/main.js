console.log("Bienvenido al curso de CodigoFacilito de desarrollo Web")
console.log("")


// DOM (Document Object Model)
/*
let links = document.querySelectorAll("a");

links.forEach(function (link) {
    console.log(link)
})

let cells = document.querySelectorAll("td");

cells.forEach(function (td) {
    td.addEventListener("click", function () {
        console.log(this)
    })
})

// Obtener los eementos de la clase .close
let links = document.querySelectorAll('.close');

// Recorrerlos
links.forEach(function (link) {
    // Agregar un evento click a cada uno de ellos
    link.addEventListener("click", function () {
        console.log(":")
    })
})*/

// Obtener los eementos de la clase .close
let links = document.querySelectorAll(".close");
// Recorrerlos
links.forEach(function (link) {
    // Agregar un evento click a cada uno de ellos
    link.addEventListener("click", function (ev) {
        ev.preventDefault();

        let _content = document.querySelector(".content");

        // Quitarle las clases de animación que ya tienen
        _content.classList.remove("animate__animated");
        _content.classList.remove("animate__fadeInDown");

        // Agregar classe para animar su salida
        _content.classList.add("animate__animated");
        _content.classList.add("animate__fadeOutUp");
    })
})


/*let icons = document.querySelectorAll("i");

icons.forEach(function (icon) {
    icon.classList.remove("fa-star")
})*/





























