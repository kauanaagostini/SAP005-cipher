//construção dos parametros para o calculo da cifra de cesar,
//variavel para trazer a frase final
const codi1aLetra = 65
const tamAlfabeto = 26
let fraseFinalcrip = ""
let fraseFinaldescrip = ""

const cipher = {
//funcao de criptografar, e buscar as informações do Index
//retorando a frase final letra a letra incrementada.
  encode (numbercrip, msgcrip) {
    if (!numbercrip || !msgcrip) {
      throw new TypeError();
    } else {
      for (let i=0; i < msgcrip.length; i++){
        let resultado1 = (msgcrip.charCodeAt(i) + numbercrip - codi1aLetra) % tamAlfabeto
        let resultado2 = resultado1 + codi1aLetra
        let imprimir = String.fromCharCode(resultado2)
        fraseFinalcrip += imprimir
      }
      return fraseFinalcrip.trim()
    }    
  },
//funcao de descriptografar, e buscar as informações do Index.
//retorando a frase final letra a letra incrementada, trabalhando com os bugs de numeros negativos e numero que passam de um alfabeto.
  decode (numberdescrip, msgdescrip){
    if (!numberdescrip || !msgdescrip){
      throw new TypeError("valor vazio", "cipher.js", 28);
    } else {
      for (let i=0; i < msgdescrip.length; i++){
        let resultado1 = (msgdescrip.charCodeAt(i) - numberdescrip - codi1aLetra)
        let negativo = (-resultado1 + tamAlfabeto)
        if(resultado1 <0 & negativo <=1){
            let resultado2 = resultado1 + tamAlfabeto
            let resultado3 = resultado2 + codi1aLetra
            let imprimir = String.fromCharCode(resultado3)
            fraseFinaldescrip += imprimir        
        } else if (resultado1 <0 & negativo >1){
                 let resultado2 = (resultado1 + (tamAlfabeto * Math.trunc(negativo)) + tamAlfabeto) % tamAlfabeto
                 let resultado3 = resultado2 + codi1aLetra
                 let imprimir = String.fromCharCode(resultado3)
                 fraseFinaldescrip += imprimir
            } else {
                  let resultado2 = resultado1 % tamAlfabeto
                  let resultado3 = resultado2 + codi1aLetra
                  let imprimir = String.fromCharCode(resultado3)
                  fraseFinaldescrip += imprimir
                }
          }
          return fraseFinaldescrip
    }
  }    
};

export default cipher;
