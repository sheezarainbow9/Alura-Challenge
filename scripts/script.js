var textoDigitado = document.querySelector("#area-texto"); 
var textoGravado = document.querySelector("#texto-saida");
var imgFinder = document.querySelector("#lupa-img")

function criptografar() {

    if (textoDigitado.value != "") {

        var texto = textoDigitado.value; 
        
        var resultadoCrip = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai")
        .replace(/o/g, "ober").replace(/u/g, "ufat");
        
        document.getElementById("texto-saida").innerHTML ='<textarea  id="resultado" >'+ resultadoCrip +'</textarea>' +
        '<button id="bt-copiar" onclick="copiar()">Copiar</button>';

    }else{

        alert("Digite um texto.");
    } 
};

function descriptografar() {

    var texto = textoDigitado.value;

    var resultadoDesc = texto.replace(/enter/g, "e").replace(/imes/g, "e").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById("texto-saida").innerHTML = '<textarea  id="resultado">'+ resultadoDesc +'</textarea>' +
     '<button id="bt-copiar" onclick="copiar()">Copiar</button>';
};

function copiar() {

    var textoCopiado = document.getElementById('resultado');
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand('copy');
    alert("Texto copiado para a área de transferência.");
} 


