var formulario  = document.getElementById("formulario");
var nota1 = document.getElementById("nota1");
var nota2 = document.getElementById("nota2");
var nota3 = document.getElementById("nota3");
var resultado = document.getElementById("resultado");
var total = 0;
// todo evento javascript precede com on
//ex: onclick, onsubmit, onmouseover ....
formulario.onsubmit = function(evento) {
    evento.preventDefault();

    if (validacao(nota1.value, nota2.value, nota3.value)){
        return;
    }



    total = parseFloat(nota1.value)+
            parseFloat(nota2.value)+
            parseFloat(nota3.value);
    var media = total /3
            resultado.innerHTML = (media / 3).toFixed(2);
    //console.log(total)
};

function validacao(nota1Val, nota2Val, nota3Val){
    var error =false;

    if (nota1Val  <0 || nota1Val > 10){
        nota1.style.border = "solid 1px red";
        return false;
    }
    else{
        nota1.style.border = "solid 1px blue";
        
    }

    if (nota2Val  <0 || nota2Val > 10){        
           nota2.style = "";
        return false;
    }
    else{
        nota2.style.border = "solid 1px blue";
        
    }
    if (nota3Val  <0 || nota3Val > 10){
        nota3.style.border = "solid 1px red";
        return false;
    }
    else{
        nota3.style = "";
        
    }

}

