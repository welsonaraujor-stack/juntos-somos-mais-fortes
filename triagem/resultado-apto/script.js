// ============================================================
// RESULTADO APTO — script.js
// ============================================================

// ------------------------------------------------------------
// 1. PREENCHER NOME DO USUÁRIO
// ------------------------------------------------------------
const nome    = localStorage.getItem('nome');
const usuario = localStorage.getItem('usuario');
const nomeEl  = document.querySelector('.nome-doador');

if (nomeEl) {
    const primeiroNome = (nome || usuario || 'Você').split(' ')[0];
    nomeEl.textContent = `${primeiroNome}, sua pré-triagem foi concluída com sucesso!`;
}

// ------------------------------------------------------------
// 2. FOTO DO USUÁRIO (se tiver salvo)
// ------------------------------------------------------------
const fotoSalva = localStorage.getItem('fotoPerfil');
const fotoEl    = document.querySelector('.foto-wrapper img');

if (fotoSalva && fotoEl) {
    fotoEl.src = fotoSalva;
}

// ------------------------------------------------------------
// 3. NAVEGAÇÃO
// ------------------------------------------------------------
function abrirMapa() {
    window.location.href = '../../doacao/mapa-unidades/index.html';
}

function agendarDoacao() {
    window.location.href = '../../doacao/agendamento/index.html';
}