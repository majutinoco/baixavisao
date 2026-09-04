// Controle do tamanho da fonte
let tamanhotexto = 100;

function aumentarFonte() {
    if (tamanhotexto < 150) {
        tamanhotexto += 10;
        document.body.style.fontSize = `${tamanhotexto}%`;
    }
}

function diminuirFonte() {
    if (tamanhotexto > 80) {
        tamanhotexto -= 10;
        document.body.style.fontSize = `${tamanhotexto}%`;
    }
}

// Alternar modo de Alto Contraste
function altoContraste() {
    document.body.classList.toggle('contraste');
}

// Funcionalidade do Leitor de Voz para toda a página
let lendo = false;

function toggleLeitorVoz() {
    const btn = document.getElementById('btn-ouvir');

    // Se já estiver lendo, cancela a leitura
    if ('speechSynthesis' in window && window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        lendo = false;
        btn.innerText = '🔊 Ouvir Texto';
        return;
    }

    if ('speechSynthesis' in window) {
        // Captura o texto das partes principais do site
        const elementoHeader = document.querySelector('header')?.innerText || '';
        const elementosMain = Array.from(document.querySelectorAll('main section'))
            .map(sec => sec.innerText)
            .join(' . ');
        const elementoFooter = document.querySelector('footer')?.innerText || '';

        const textoCompleto = `${elementoHeader} . ${elementosMain} . ${elementoFooter}`;

        const mensagem = new SpeechSynthesisUtterance(textoCompleto);
        mensagem.lang = 'pt-BR';
        mensagem.rate = 1.0; // Velocidade da fala

        mensagem.onstart = () => {
            lendo = true;
            btn.innerText = '⏹️ Parar Leitura';
        };

        mensagem.onend = () => {
            lendo = false;
            btn.innerText = '🔊 Ouvir Texto';
        };

        mensagem.onerror = () => {
            lendo = false;
            btn.innerText = '🔊 Ouvir Texto';
        };

        window.speechSynthesis.speak(mensagem);
    } else {
        alert('Desculpe, seu navegador não suporta a leitura de voz.');
    }
}

// Recurso de Clicar para Ampliar as Imagens (Lightbox)
document.addEventListener('DOMContentLoaded', () => {
    // Cria a estrutura do modal/popup dinamicamente
    const modal = document.createElement('div');
    modal.id = 'imagem-modal';
    modal.innerHTML = `
        <span class="fechar-modal">&times;</span>
        <img class="imagem-modal-conteudo" id="img-ampliada" alt="Imagem ampliada">
    `;
    document.body.appendChild(modal);

    const imgModal = document.getElementById('img-ampliada');
    const fecharBtn = modal.querySelector('.fechar-modal');

    // Seleciona todas as imagens das seções
    const imagens = document.querySelectorAll('.imagem-destaque');
    
    imagens.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            modal.style.display = 'flex';
            imgModal.src = img.src;
            imgModal.alt = img.alt;
        });
    });

    // Fechar o modal ao clicar no 'X'
    fecharBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Fechar o modal ao clicar fora da imagem
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
