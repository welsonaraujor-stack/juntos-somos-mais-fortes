let resposta = "sim";

function selecionar(opcao){

    document
    .getElementById("sim")
    .classList.remove("selecionado");

    document
    .getElementById("nao")
    .classList.remove("selecionado");

    document
    .getElementById(opcao)
    .classList.add("selecionado");

    resposta = opcao;
}

function continuar(){

    if(resposta === "sim"){

        alert(
        "Obrigado por registrar seu interesse em ser doador de órgãos."
        );

    }else{

        alert(
        "Você poderá alterar essa escolha futuramente."
        );

    }

}SW