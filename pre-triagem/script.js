const perguntas = [

"Você pesa mais de 50 kg?",

"Você tem entre 16 e 69 anos?",

"Dormiu pelo menos 6 horas?",

"Teve gripe recentemente?",

"Fez tatuagem nos últimos 12 meses?",

"Está tomando antibióticos?",

"Realizou cirurgia recente?",

"Deseja continuar a doação?"

];

let atual = 0;

function responder(resposta){

    atual++;

    if(atual >= perguntas.length){

        window.location.href =
        "../resultado/index.html";

        return;
    }

    document.getElementById(
    "pergunta"
    ).innerText = perguntas[atual];

    document.getElementById(
    "numero"
    ).innerText =
    (atual + 1) + " de 8";

    atualizarBolinhas();
}

function atualizarBolinhas(){

    const bolinhas =
    document.querySelectorAll(".bolinha");

    bolinhas.forEach((b,index)=>{

        if(index <= atual){

            b.classList.add("ativa");

        }else{

            b.classList.remove("ativa");

        }

    });

}