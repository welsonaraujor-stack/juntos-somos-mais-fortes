// ============================================================
// IMPACTO SOCIAL — script.js
// ============================================================

// ------------------------------------------------------------
// 1. NOME E FOTO DO USUÁRIO
// ------------------------------------------------------------
const nome    = localStorage.getItem('nome');
const usuario = localStorage.getItem('usuario');
const primeiroNome = (nome || usuario || 'Você').split(' ')[0];

// Nome no hero
const heroSpan = document.querySelector('.hero span');
if (heroSpan) heroSpan.textContent = `${primeiroNome}, você já ajudou`;

// Foto
const fotoSalva = localStorage.getItem('fotoPerfil');
const fotoEl    = document.querySelector('.hero-foto img');
if (fotoSalva && fotoEl) fotoEl.src = fotoSalva;

// ------------------------------------------------------------
// 2. CALCULAR IMPACTO A PARTIR DO HISTÓRICO
// ------------------------------------------------------------
const historico = JSON.parse(
    localStorage.getItem('historicoDoacoes') || '[]'
);

const totalDoacoes    = historico.length;
const totalMl         = totalDoacoes * 450;
const totalVidas      = totalDoacoes * 4;
const totalCampanhas  = [...new Set(historico.map(h => h.local))].length;

// Preenche o número grande do hero
const heroH2 = document.querySelector('.hero h2');
if (heroH2) heroH2.textContent = totalVidas || 0;

// Preenche os cards
const cards = document.querySelectorAll('.card h5');
if (cards[0]) cards[0].textContent = totalDoacoes || 0;
if (cards[1]) cards[1].textContent = totalMl ? `${totalMl.toLocaleString('pt-BR')} ml` : '0 ml';
if (cards[2]) cards[2].textContent = totalVidas || 0;
if (cards[3]) cards[3].textContent = totalCampanhas || 0;

// ------------------------------------------------------------
// 3. MENU INFERIOR
// ------------------------------------------------------------
const botoesNav = document.querySelectorAll('nav button');

botoesNav[0].onclick = () => {
    window.location.href = '../../doador/carteira-doador/index.html';
};

botoesNav[1].onclick = () => {
    window.location.href = '../../doacao/mapa-unidades/index.html';
};

botoesNav[2].onclick = () => {
    window.location.href = '../../historico/index.html';
};

botoesNav[3].onclick = () => {
    // já está na tela de impacto
};

botoesNav[4].onclick = () => {
    window.location.href = '../../beneficio/index.html';
};

// ------------------------------------------------------------
// 4. VOLTAR
// ------------------------------------------------------------
const btnVoltar = document.querySelector('.voltar');
if (btnVoltar) {
    btnVoltar.href = '../../doador/carteira-doador/index.html';
}