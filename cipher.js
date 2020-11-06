//construção dos parametros para o calculo da cifra de cesar,
//variavel para trazer a frase final
const codi1aLetraMa = 65
const codi1aLetraMi = 97
const tamAlfabeto = 26
//let fraseFinalcrip = ""
//let fraseFinaldescrip = ""

const cipher = {
//funcao de criptografar, e buscar as informações do Index
//retorando a frase final letra a letra incrementada.
  encode (numbercrip, msgcrip) {
    if (!numbercrip || !msgcrip) {
      throw new TypeError();
    } else {
        let fraseFinalcrip = ""
        for (let i=0; i < msgcrip.length; i++){
          let resultado1 = msgcrip.charCodeAt(i) 
          if (resultado1 >=97 & resultado1 <=122){
            let resultado2 = (resultado1 + numbercrip - codi1aLetraMi) % tamAlfabeto + codi1aLetraMi
            let imprimir = String.fromCharCode(resultado2)
            fraseFinalcrip += imprimir
          } else if (resultado1 >=65 & resultado1 <=90){
            let resultado2 = (resultado1 + numbercrip - codi1aLetraMa) % tamAlfabeto + codi1aLetraMa
            let imprimir = String.fromCharCode(resultado2)
            fraseFinalcrip += imprimir
            } else {
              let imprimir = String.fromCharCode(resultado1)
              fraseFinalcrip += imprimir
              }
        }
        return fraseFinalcrip
    }
  },

//funcao de descriptografar, e buscar as informações do Index.
//retorando a frase final letra a letra incrementada, trabalhando com os bugs de numeros negativos e numero que passam de um alfabeto.
  decode (numberdescrip, msgdescrip){
    if (!numberdescrip || !msgdescrip){
      throw new TypeError();
    } else {
      let fraseFinaldescrip = ""
      for(let i=0; i < msgdescrip.length; i++){
        let resultado1 = msgdescrip.charCodeAt(i)
        if (resultado1 >=95 & resultado1 <=122){
          let resultado2 = (resultado1 - numberdescrip - codi1aLetraMi)
          let negativo = (-resultado2 / tamAlfabeto)
          if (resultado2 <0 & negativo <=1){
            let resultado3 = resultado2 + tamAlfabeto + codi1aLetraMi 
            let imprimir = String.fromCharCode(resultado3)
            fraseFinaldescrip += imprimir
          } else if (resultado2 <0 & negativo >1){
              let resultado3 = (resultado1 + (tamAlfabeto * Math.trunc(negativo)) + tamAlfabeto) % tamAlfabeto + codi1aLetraMi
              let imprimir = String.fromCharCode(resultado3)
              fraseFinaldescrip += imprimir
            } else {
                let resultado3 = resultado2 % tamAlfabeto + codi1aLetraMi 
                let imprimir = String.fromCharCode(resultado3)
                fraseFinaldescrip += imprimir
              }  
        } else if (resultado1 >=65 & resultado1 <=90){
            let resultado2 = (resultado1 - numberdescrip - codi1aLetraMa)
            let negativo = (-resultado2 / tamAlfabeto)
            if (resultado2 <0 & negativo <=1){
              let resultado3 = resultado2 + tamAlfabeto + codi1aLetraMa 
              let imprimir = String.fromCharCode(resultado3)
              fraseFinaldescrip += imprimir
            } else if (resultado2 <0 & negativo >1){
                let resultado3 = (resultado2 + (tamAlfabeto * Math.trunc(negativo)) + tamAlfabeto) % tamAlfabeto + codi1aLetraMa
                let imprimir = String.fromCharCode(resultado3)
                fraseFinaldescrip += imprimir
              } else {
                  let resultado3 = resultado2 % tamAlfabeto + codi1aLetraMa 
                  let imprimir = String.fromCharCode(resultado3)
                  fraseFinaldescrip += imprimir
                } 
          } else {
              let imprimir = String.fromCharCode(resultado1)
              fraseFinaldescrip += imprimir
            }
      }
      return fraseFinaldescrip
    }
  }    
};

export default cipher;
