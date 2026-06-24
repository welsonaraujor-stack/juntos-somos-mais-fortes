// =====================================
// PERGUNTA 1 - PESO
// =====================================

function responderPeso(resposta){

    localStorage.setItem("peso", resposta);

   

    window.location.href =
    "pergunta2.html";

}

// =====================================
// PERGUNTA 2 - IDADE
// =====================================

function responderIdade(resposta){

    localStorage.setItem(
        "idade",
        resposta
    );

   

    window.location.href =
    "pergunta3.html";


}
// =====================================
// PERGUNTA 3 - SONO
// =====================================

function responderSono(resposta){

    localStorage.setItem(
        "sono",
        resposta
    );

   

    window.location.href =
    "pergunta4.html";


}


// =====================================
// PERGUNTA 4 - SAÚDE
// =====================================

function responderSaude(resposta){

    localStorage.setItem(
        "saude",
        resposta
    );

     if(resposta === "sim"){
    
        window.location.href =
        "pergunta5.html";

    }else{
        window.location.href =
        "pergunta5.html";
     }
}


// =====================================
// PERGUNTA 5 - TATUAGEM
// =====================================

function responderTatuagem(resposta){

    localStorage.setItem(
        "tatuagem",
        resposta
    );

    if(resposta === "sim"){
     window.location.href =
    "pergunta6.html";
        alert(
            "Você deverá aguardar o prazo exigido para doação."
        );

    }else{

        window.location.href =
        "pergunta6.html";

    }

}


// =====================================
// PERGUNTA 6 - GRAVIDEZ
// =====================================

function responderGravidez(resposta){

    localStorage.setItem(
        "gravidez",
        resposta
    );

    if(resposta === "sim"){
        window.location.href =
        "pergunta7.html";

        alert(
            "A doação não é permitida durante esse período."

        
        );

    
    }else{
        window.location.href =
        "pergunta7.html";

    }

}


// =====================================
// PERGUNTA 7 - MEDICAMENTOS
// =====================================

function responderMedicamentos(resposta){

    localStorage.setItem(
        "medicamentos",
        resposta
    );

    if(resposta === "sim"){
        window.location.href =
        "pergunta8.html";
        alert(
            "Será necessária avaliação na triagem presencial."
        );

    }else{
        window.location.href =
        "pergunta8.html";

    }

}


// =====================================
// PERGUNTA 8 - FINAL
// =====================================

function responderFinal(resposta){

    localStorage.setItem(
        "final",
        resposta
    );

    verificarTriagem();

}
function verificarTriagem(){

    const peso =
    localStorage.getItem("peso");

    const idade =
    localStorage.getItem("idade");

    const sono =
    localStorage.getItem("sono");

    const saude =
    localStorage.getItem("saude");

    const tatuagem =
    localStorage.getItem("tatuagem");

    const gravidez =
    localStorage.getItem("gravidez");

    const medicamentos =
    localStorage.getItem("medicamentos");

    const final =
    localStorage.getItem("final");


    if(

        peso === "sim" &&
        idade === "sim" &&
        sono === "sim" &&

        saude === "nao" &&
        tatuagem === "nao" &&
        gravidez === "nao" &&
        medicamentos === "nao" &&
        final === "nao"

    ){

        window.location.href =
        "../resultado-apto/index.html";

    }else{

        window.location.href =
        "../resultado-inapto/index.html";

    }

}