/* variaveis possíveis em JS
var     - escopo global
let     - escopo local
const   - escopo global(Constante)
*/

/*
formas de acesso
por Tag: getElementByTagName()
por Id: getElementById()
por nome: getElementsByName()
por classe: getElementsByClassName()
por seletor: querrySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome () {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
       //alert('nome invalido')
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}