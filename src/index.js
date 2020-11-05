import cipher from './cipher.js';
//variavel para trazer a frase final
//variavel para informar que o botao existe
const crip = document.getElementById("crip")
const descrip = document.getElementById("descrip")

//função buscar dados do HTML enviar para Cipher.encode e devolver na tela.
function dadoscripto(event){
    event.preventDefault()
    let msgcrip = document.getElementById("msgcrip").value
    let numbercrip = parseInt(document.getElementById("numbercrip").value)
    let fraseFinalcrip = cipher.encode(numbercrip,msgcrip)
    document.getElementById("respcrip").innerHTML=fraseFinalcrip
}
//informando ao JS o que ele deve fazer quando o botao cripto for precionado.
crip.addEventListener("click", dadoscripto)

//função buscar dados do HTML enviar para Cipher.decode e devolver na tela.
function dadosdescripto(event){
    event.preventDefault()
    let msgdescrip = document.getElementById("msgdescrip").value
    let numberdescrip = parseInt(document.getElementById("numberdescrip").value)
    let fraseFinaldescrip = cipher.decode(numberdescrip, msgdescrip)
    document.getElementById("respdescrip").innerHTML=fraseFinaldescrip
}
//informando ao JS o que ele deve fazer quando o botao descripto for precionado.
descrip.addEventListener("click", dadosdescripto)