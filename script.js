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

    if(inputNota.value >= media){
        const aviso = document.createElement('div');
        aviso.style.backgroundColor = '##39D252';
        aviso.style.width = '500px';
        aviso.style.height = '400px';
        aviso.style.borderRadius = '20.5px';
        aviso.style.display = 'flex';
        aviso.style.alignItems = 'center';
        aviso.style.justifyContent = 'center';

        let paragrafoAviso1 = document.createElement('p');
        paragrafoAviso1.textContent = `Parabéns ${inputNome.value}! Você foi aprovado pela instuição ${inputInst.value}, ao realizar a prova de ${select.value} com a nota ${inputNota.value}. Estamos felizes pela sua conquista!`
        paragrafoAviso1.style.width = '460px';
        paragrafoAviso1.style.textAlign = 'justify';
        paragrafoAviso1.style.color = '#FFFFFF';
        paragrafoAviso1.style.fontSize = '20px';

        aviso.appendChild(paragrafoAviso1);

        document.querySelector('.div-aviso').appendChild(aviso);
    } else {
        
    }
});