
var inputText = document.querySelector("textarea#input-text");
var outputText = document.querySelector("textarea#output-text");
var btnCrypto = document.querySelector("main-btn#crypt-btn");
var btnDecrypto = document.querySelector("main-btn#decrypt-btn");
var btnCopy = document.getElementById("main-btn#copy-btn");

function cryptoText() {
    
    var text = inputText.value.toLowerCase().normalize('NFD')

    var textOutput = text.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat").replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, ''); 

    outputText.innerHTML = `${textOutput}`;
    
};

function decryptoText() {
    
    var textOutput = inputText.value.toLowerCase();

    outputText.innerHTML = `${textOutput}`;
   
};

function textCopy() {

    if(document.getElementById("output-text").value == "") {

        alert('Por favor, digite algo.');

        document.getElementById("input-text").focus();

        return false

    }else {

        var copyText = outputText.innerHTML;
    
        navigator.clipboard.writeText(copyText).then(() => {
    
            alert('Texto copiado para a área de transferência.');
        });
    }      
}


