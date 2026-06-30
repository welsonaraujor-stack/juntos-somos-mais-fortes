// ============================================================
// PRÉ-CADASTRO — script.js
// ============================================================

// ------------------------------------------------------------
// 1. PREVIEW DA FOTO
// ------------------------------------------------------------
const inputFoto = document.getElementById('foto');
const preview   = document.getElementById('preview');

if (inputFoto && preview) {
    inputFoto.addEventListener('change', function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                preview.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
}

// ------------------------------------------------------------
// 2. PREENCHER E-MAIL AUTOMATICAMENTE (vindo do login)
// ------------------------------------------------------------
const usuario    = localStorage.getItem('usuario');
const campoEmail = document.getElementById('email');

if (usuario && campoEmail) {
    campoEmail.value    = usuario;
    campoEmail.readOnly = true;
    campoEmail.style.color = '#aaa';
}

// ------------------------------------------------------------
// 3. VALIDAÇÃO + SALVAR + NAVEGAR
// ------------------------------------------------------------
const btnContinuar = document.getElementById('continuar');

if (btnContinuar) {
    btnContinuar.addEventListener('click', () => {

        const nome       = document.getElementById('nome').value.trim();
        const cpf        = document.getElementById('cpf').value.trim();
        const nascimento = document.getElementById('nascimento').value;
        const telefone   = document.getElementById('telefone').value.trim();
        const cidade     = document.getElementById('cidade').value.trim();

        if (!nome) {
            destacarErro('nome', 'Por favor, digite seu nome completo.');
            return;
        }

        if (!cpf) {
            destacarErro('cpf', 'Por favor, digite seu CPF.');
            return;
        }

        if (!nascimento) {
            destacarErro('nascimento', 'Por favor, informe sua data de nascimento.');
            return;
        }

        if (!telefone) {
            destacarErro('telefone', 'Por favor, digite seu telefone.');
            return;
        }

        localStorage.setItem('nome',       nome);
        localStorage.setItem('cpf',        cpf);
        localStorage.setItem('nascimento', nascimento);
        localStorage.setItem('telefone',   telefone);
        localStorage.setItem('cidade',     cidade);

        window.location.href = '../quem-e-voce/index.html';
    });
}

// ------------------------------------------------------------
// UTILITÁRIO — destaca campo com erro
// ------------------------------------------------------------
function destacarErro(id, mensagem) {
    const input = document.getElementById(id);
    if (input) {
        input.style.borderColor = '#d90012';
        input.focus();
        input.addEventListener('input', () => {
            input.style.borderColor = '';
        }, { once: true });
    }
    alert(mensagem);
}