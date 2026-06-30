// ============================================================
// RESULTADO INAPTO — script.js
// ============================================================

// ------------------------------------------------------------
// 1. PREENCHER NOME DO USUÁRIO
// ------------------------------------------------------------
const nome    = localStorage.getItem('nome');
const usuario = localStorage.getItem('usuario');
const nomeEl  = document.querySelector('.nome-doador');

if (nomeEl) {
    const primeiroNome = (nome || usuario || 'Você').split(' ')[0];
    nomeEl.textContent = `${primeiroNome}, não se preocupe!`;
}

// ------------------------------------------------------------
// 2. FOTO DO USUÁRIO
// ------------------------------------------------------------
const fotoSalva = localStorage.getItem('fotoPerfil');
const fotoEl    = document.querySelector('.foto-wrapper img');

if (fotoSalva && fotoEl) {
    fotoEl.src = fotoSalva;
}

// ------------------------------------------------------------
// 3. PREENCHER MOTIVOS DO IMPEDIMENTO
// ------------------------------------------------------------
const impedimentos = JSON.parse(
    localStorage.getItem('impedimentos') || '[]'
);

const lista = document.getElementById('listaMotivos');

if (lista) {
    if (impedimentos.length > 0) {
        lista.innerHTML = impedimentos.map(m => `
            <div class="motivo-item">
                <i class="fa-solid fa-triangle-exclamation"></i>
                ${m}
            </div>
        `).join('');
    } else {
        lista.innerHTML = `
            <div class="motivo-item">
                <i class="fa-solid fa-circle-info"></i>
                Algumas respostas indicam que você deve aguardar antes de doar.
            </div>`;
    }
}

// ------------------------------------------------------------
// 4. NAVEGAÇÃO
// ------------------------------------------------------------
function refazerTriagem() {
    // Limpa respostas anteriores
    const chaves = ['peso','idade','sono','saude','tatuagem','gravidez','medicamentos','final'];
    chaves.forEach(c => localStorage.removeItem(c));
    localStorage.removeItem('impedimentos');

    window.location.href = '../pre-triagem/pergunta1.html';
}

function voltarInicio() {
    window.location.href = '../../perfis/pessoa/index.html';
}