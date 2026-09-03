let tamanho = 18;

// Função para aumentar o tamanho do texto
function aumentarFonte() {
    if (tamanho < 32) {
        tamanho += 2;
        document.body.style.fontSize = tamanho + "px";
    }
}

// Função para diminuir o tamanho do texto
function diminuirFonte() {
    if (tamanho > 14) {
        tamanho -= 2;
        document.body.style.fontSize = tamanho + "px";
    }
}

// Função para alternar o modo de Alto Contraste
function altoContraste() {
    document.body.classList.toggle("contraste");
}
