let tamanho = 18;

function aumentarFonte(){

tamanho += 2;
document.body.style.fontSize = tamanho + "px";

}

function diminuirFonte(){

if(tamanho>12){

tamanho -=2;
document.body.style.fontSize = tamanho + "px";

}

}

function altoContraste(){

document.body.classList.toggle("contraste");

}
