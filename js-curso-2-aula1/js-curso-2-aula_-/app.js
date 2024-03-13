let numerosSorteados = [];
let numerosLimite = 10;
let numeroAleatorio = gerarNumeroAleatorio();
let quantidadetentativa = 1;


function inserirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}
mensagemDeNovoJogo()
function verificarChute() {
    let chute = document.querySelector('input').value;

    //console.log(numeroAleatorio)

    if (chute == numeroAleatorio) {
        inserirTexto('h1', `Parabéns você acertou`);
        let pluralOuSingular = quantidadetentativa > 1 ? 'tentativas' : 'tentativa'
        inserirTexto('p', `Descobriu o número secreto com ${quantidadetentativa} ${pluralOuSingular}`);
        document.getElementById('reiniciar').removeAttribute('disabled');



    } else {
        limpaTela()

        if (chute > numeroAleatorio) {
            inserirTexto('p', "O número é menor");
        } else {
            inserirTexto('p', "O número é maior");

        }
        quantidadetentativa++

    }
}


function limpaTela() {
    chute = document.querySelector('input');
    chute.value = ``;
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numerosLimite + 1);
    let quantidadeDeElementosNaLista = numerosSorteados.length;
    if(quantidadeDeElementosNaLista == numerosLimite){
        numerosSorteados = []
    }

    if (numerosSorteados.includes(numeroEscolhido)) {
            return gerarNumeroAleatorio();
        } else {
            numerosSorteados.push(numeroEscolhido);
            console.log(numerosSorteados);
            return numeroEscolhido;
        }

}

function novoJogo() {
    numeroAleatorio = gerarNumeroAleatorio();
    quantidadetentativa = 1;
    limpaTela();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    mensagemDeNovoJogo();

}

function mensagemDeNovoJogo() {
    inserirTexto('h1', 'Jogo do número secreto');
    inserirTexto('p', 'Escolha um número entre 1 e 10');

}
