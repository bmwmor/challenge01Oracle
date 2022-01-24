/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var botonEncript = document.querySelector("#btn-encriptar");
var btnCopy = document.querySelector("#btn-copy");
var txtInput =  document.querySelector("#msg");
var h2txt = document.querySelector("#msgh2");

botonEncript.addEventListener("click",function(event){
    event.preventDefault();

    var form = document.querySelector("#input-texto"); 
    console.log(form.value);
    var encval = form.value;
    encval = encval.replace('e', 'enter');
    encval = encval.replace('i', 'imes');
    encval = encval.replace('a', 'ai');
    encval = encval.replace('o', 'ober');
    encval = encval.replace('u', 'ufat');
    console.log(encval);
    h2txt.textContent = "Mensaje Encriptado!!!";
    /*
    console.log("Reversa");
    encval = encval.replace('enter', 'e');
    encval = encval.replace('imes', 'i');
    encval = encval.replace('ai', 'a');
    encval = encval.replace('ober', 'o');
    encval = encval.replace('ufat', 'u');
    */
    txtInput.value = encval;
    console.log(encval);
    //var paciente = capturarDatosPaciente(form);
    //var pacienteTr = construirTr(paciente);
    //var tabla = document.querySelector("#tabla-pacientes");
    //tabla.appendChild(pacienteTr);
    //form.reset();

});

var botonDecript = document.querySelector("#btn-desencriptar");
var form = document.querySelector("#input-texto");

window.addEventListener("load", function() {
    form.addEventListener("keypress", soloNumeros, false);
  });
  
  //Solo permite introducir numeros.
  function soloNumeros(e){
    var key = window.event ? e.which : e.keyCode;
    
    if ((key >=0 && key < 33) || (key >= 97 && key <= 122) || key==241 ) {
        console.log("IF: "+key);
    }else{
        console.log("NO:  "+key);
        e.preventDefault();
    }
  }



botonDecript.addEventListener("click",function(event){
    event.preventDefault();

     
    var encval = form.value;
    console.log(encval);
    var re = /enter/g;
    encval = encval.replace(re, "e");
    re = /imes/g
    encval = encval.replace(re, 'i');
    re = /ai/g
    encval = encval.replace(re, 'a');
    re = /ober/g
    encval = encval.replace(re, 'o');
    re = /ufat/g
    encval = encval.replace(re, 'u');
    txtInput.value = encval;
    h2txt.textContent = "Mensaje Desencriptado!!!";
    console.log("Desencriptado:");
    console.log(encval);

});



btnCopy.addEventListener("click",function(event){
    event.preventDefault();

    txtInput.select();
    navigator.clipboard.writeText(txtInput.value).then(function() {
        console.log('Async: Copying to clipboard was successful!');
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });
});


