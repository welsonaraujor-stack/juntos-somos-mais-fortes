//function selecionar(tipo){

   // alert(
   //     "Perfil selecionado: " + tipo
   // );

    // Futuro feito dia 12/06/2026

    // if(tipo === "Pessoa"){
    //     window.location.href =
    //     "../pessoa/index.html";
    // }

//}
function selecionar(tipo){

    if(tipo === "Pessoa"){

        window.location.href =
        "../pessoa/index.html";

    }

    if(tipo === "Grupo"){

        window.location.href =
        "../grupo/index.html";

    }
    
       if(tipo === "Instituição"){
    window.location.href =
    "../instituicao/index.html";
    
    }

    if(tipo === "Parceiro"){
    window.location.href =
    "../parceiro/index.html";
    
    }
}