function moverPosicionRandom(element){
    element.style.position = 'absolute';
    element.style.top = Math.random() * (window.innerHeight - element.offsetHeight) + 'px';
    element.style.left = Math.random() * (window.innerWidth - element.offsetWidth) + 'px';
}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let modoSexo = document.getElementsByClassName("modo_sexo")[0];

btnNo.addEventListener('mouseenter', function(e){moverPosicionRandom(e.target)});

btnSi.addEventListener('click', function(e){
    alert('Sabía que sí te gustaban las pizzas. ¡Vamos a comprar una!🤤')
    modoSexo.style.display = 'block';
    const cancion = new Audio('amarre\img\sample4.mp3');
    cancion.play();
});