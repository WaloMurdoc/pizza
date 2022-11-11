let parrafoInicial = document.getElementById("parrafoinicial");

console.log(parrafoInicial)

parrafoInicial.onclick = function(){
    cambiacolorAleatorio();
}

function cambiacolorAleatorio(){
    const colores = [
        "red",
        "blue",
        "black",
        "cyan"
    ];

    parrafoInicial.style.color = colores[Math.floor(Math.random() * colores.length)]
}