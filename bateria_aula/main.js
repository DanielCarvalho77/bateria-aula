function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
  
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else{
        console.log('Elemento ou botão não encontrado');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //console.log(idAudio);
    //template String, usado com ` crase e com $ para pegar
    //o restante da String na clase lá no html
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            listaDeTeclas.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
