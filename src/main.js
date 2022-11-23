function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio)
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor invalido')
    }
}
//**criar lista */
const ListaDeTeclas = document.querySelectorAll('.tecla')

//*enquanto - aplicar rotina em cada elemnto da lista**/
for (let contador = 0; contador < ListaDeTeclas.length; contador++) {

    const tecla = ListaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;//***template string */

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    // console.log(contador);
    tecla.onkeydown = function (evento) {
        // console.log(evento.code == 'Space')
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}


