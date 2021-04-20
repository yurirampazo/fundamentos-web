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
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')
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

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
 
    if (assunto.value.length >= 2) {
       txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
       txtAssunto.style.color = 'red'
       txtAssunto.style.display = 'block'
    } else {
       txtAssunto.style.display = 'none'
       assuntoOk = true
    }
 }

 function enviar() {
     if (nomeOk == true && emailOk == true && assuntoOk == true) {
         alert('Formulário preechido com sucesso')
     } else {
         alert ('Preencha o formulário corretamente antes de enviar')
     }
 }

 function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
 }

 function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
 }