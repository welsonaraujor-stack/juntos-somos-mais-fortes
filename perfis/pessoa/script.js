// ============================================================
// PERFIL PESSOA — script.js
// ============================================================

// ------------------------------------------------------------
// 1. PREENCHER CAMPOS COM DADOS DO PRÉ-CADASTRO
// ------------------------------------------------------------
const campos = {
    nomeCompleto:    'nome',
    cpfUsuario:      'cpf',
    dataNascimento:  'nascimento',
    telefoneUsuario: 'telefone',
    cidadeUsuario:   'cidade',
    emailUsuario:    'usuario'
};

Object.entries(campos).forEach(([id, key]) => {
    const valor = localStorage.getItem(key);
    const el    = document.getElementById(id);
    if (valor && el) el.value = valor;
});

// ------------------------------------------------------------
// 2. PREENCHER NOME NO PERFIL
// ------------------------------------------------------------
const nome    = localStorage.getItem('nome');
const usuario = localStorage.getItem('usuario');
const nomeEl  = document.getElementById('nomeUsuario');

if (nomeEl) {
    nomeEl.innerText = nome || usuario || 'Usuário';
}

// ------------------------------------------------------------
// 3. BOTÃO INICIAR PRÉ-TRIAGEM
// ------------------------------------------------------------
const btnTriagem = document.getElementById('btnTriagem');

if (btnTriagem) {
    btnTriagem.addEventListener('click', () => {

        // Salva tipo sanguíneo se preenchido
        const tipoSanguineo = document.getElementById('tipoSanguineo')?.value;
        if (tipoSanguineo) {
            localStorage.setItem('tipoSanguineo', tipoSanguineo);
        }

        // Limpa respostas de triagem anterior
        for (let i = 1; i <= 8; i++) {
            localStorage.removeItem('pergunta' + i);
        }
        localStorage.removeItem('impedimentos');

        // Navega para pergunta 1
        window.location.href = '../../triagem/pre-triagem/pergunta1.html';
    });
}