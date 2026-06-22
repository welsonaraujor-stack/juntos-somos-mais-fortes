// ========================================
// MOSTRAR / OCULTAR SENHA
// ========================================

// Captura o campo senha
const senha =
document.getElementById("senha");

// Captura o ícone do olho
const olho =
document.getElementById("olho");

// Ao clicar no olho
olho.addEventListener("click", () => {

    // Se a senha estiver escondida
    if (senha.type === "password") {

        // Mostra a senha
        senha.type = "text";

        // Troca o emoji
        olho.textContent = "🙈";

    } else {

        // Esconde a senha novamente
        senha.type = "password";

        // Volta para o olho normal
        olho.textContent = "👁️";

    }

});


// ========================================
// VALIDAÇÃO DE LOGIN
// ========================================

// Captura o botão Entrar
const botaoEntrar =
document.getElementById("entrar");

// Quando clicar no botão Entrar
botaoEntrar.addEventListener("click", () => {

    // Captura o e-mail digitado
    const email =
    document.getElementById("email").value;

    // Captura a senha digitada
    const senhaDigitada =
    document.getElementById("senha").value;

    // Verifica se o e-mail está vazio
    if (email === "") {

        alert(
            "Digite seu e-mail ou CPF."
        );

        return;

    }

    // Verifica se a senha está vazia
    if (senhaDigitada === "") {

        alert(
            "Digite sua senha."
        );

        return;

    }

    // ====================================
    // LOGIN APROVADO
    // ====================================

    // Salva o usuário temporariamente
    localStorage.setItem(
        "usuario",
        email
    );

    // Redireciona para a tela
    // de Pré-Cadastro
    window.location.href =
    "../pre-cadastro/index.html";

});


// ========================================
// BOTÃO GOOGLE
// ========================================

// Captura o botão Google
const google =
document.querySelector(".google");

// Quando clicar no botão Google
google.addEventListener("click", () => {

    alert(
        "Integração com Google será implementada futuramente."
    );

});