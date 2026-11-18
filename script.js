/* Mapeando e Registrando os elementos nas variáveis */

const form = document.querySelector('form');
const inputNome = document.querySelector('.input-name')
const inputEmail = document.querySelector('.input-email')
const inputInst = document.querySelector('.input-inst')
const select = document.querySelector('select')
let optionDisciplina = document.querySelectorAll('option')
const inputNota = document.querySelector('.input-nota')
const botaoEnviar = document.querySelector('button')
const divAviso = document.querySelector('.div-aviso')

/*

function verNota(){
    console.log(inputNome.value);
}

*/

botaoEnviar.addEventListener('click', () => {
    let media = 7;
    const nota = Number(inputNota.value);

    const containerAviso = document.querySelector('.div-aviso');
    

    if (inputNota.value === '') {
    return;
}

    containerAviso.replaceChildren();

    if (!inputNota.reportValidity()) {
        return;
    }

    if(nota >= media){
        const aviso = document.createElement('div');
        aviso.classList.add('aviso-animado');
        aviso.style.backgroundColor = '#39D252';
        aviso.style.width = '500px';
        aviso.style.height = '250px';
        aviso.style.borderRadius = '20.5px';
        aviso.style.display = 'flex';
        aviso.style.alignItems = 'center';
        aviso.style.justifyContent = 'center';

        let paragrafoAviso1 = document.createElement('p');
        paragrafoAviso1.textContent = `Parabéns ${inputNome.value}! Você foi aprovado pela instituição ${inputInst.value}, ao realizar a prova de ${select.value} com a nota ${inputNota.value}. Estamos felizes pela sua conquista!`
        paragrafoAviso1.style.width = '460px';
        paragrafoAviso1.style.textAlign = 'justify';
        paragrafoAviso1.style.color = '#FFFFFF';
        paragrafoAviso1.style.fontSize = '18px';

        aviso.appendChild(paragrafoAviso1);
        containerAviso.appendChild(aviso);

    } else {
        const aviso2 = document.createElement('div');
        aviso2.classList.add('aviso-animado');

        aviso2.style.backgroundColor = '#c63131';
        aviso2.style.width = '500px';
        aviso2.style.height = '250px';
        aviso2.style.borderRadius = '20.5px';
        aviso2.style.display = 'flex';
        aviso2.style.alignItems = 'center';
        aviso2.style.justifyContent = 'center';

        let paragrafoAviso2 = document.createElement('p');
        paragrafoAviso2.textContent = `Infelizmente ${inputNome.value}, você foi reprovado(a)! A sua nota não atingiu a média da instituição ${inputInst.value} - a média é ${media}, a sua nota foi ${inputNota.value}.`
        paragrafoAviso2.style.width = '460px';
        paragrafoAviso2.style.textAlign = 'justify';
        paragrafoAviso2.style.color = '#FFFFFF';
        paragrafoAviso2.style.fontSize = '18px';

        aviso2.appendChild(paragrafoAviso2);
        containerAviso.appendChild(aviso2);
        
    }
});
