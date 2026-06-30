// ============================================================
// CONFIRMAÇÃO — script.js
// ============================================================

// ------------------------------------------------------------
// 1. PREENCHER NOME E FOTO DO USUÁRIO
// ------------------------------------------------------------
const nome    = localStorage.getItem('nome');
const usuario = localStorage.getItem('usuario');
const nomeEl  = document.querySelector('.topo h2');

if (nomeEl) {
    nomeEl.textContent = nome || usuario || 'Doador';
}

const fotoSalva = localStorage.getItem('fotoPerfil');
const fotoEl    = document.querySelector('.foto-wrapper img');

if (fotoSalva && fotoEl) {
    fotoEl.src = fotoSalva;
}

// ------------------------------------------------------------
// 2. PREENCHER DADOS DO AGENDAMENTO
// ------------------------------------------------------------
const local   = localStorage.getItem('agendamentoLocal')   || '—';
const horario = localStorage.getItem('agendamentoHorario') || '—';
const data    = localStorage.getItem('agendamentoData')    || '';

const localEl   = document.getElementById('unidadeEscolhida');
const horarioEl = document.getElementById('horarioEscolhido');
const dataEl    = document.getElementById('dataEscolhida');

if (localEl)   localEl.textContent   = local;
if (horarioEl) horarioEl.textContent = horario;

if (dataEl && data) {
    const d = new Date(data + 'T00:00:00');
    dataEl.textContent = d.toLocaleDateString('pt-BR', {
        day: '2-digit', month: 'long', year: 'numeric'
    });
}

// ------------------------------------------------------------
// 3. QR CODE PERSONALIZADO COM OS DADOS
// ------------------------------------------------------------
const qrImg = document.querySelector('.qr-box img');
if (qrImg) {
    const qrData = `JUNTOS-${local}-${data}-${horario}`.replace(/ /g, '-');
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(qrData)}`;
}

// ------------------------------------------------------------
// 4. SALVAR AGENDAMENTO COMPLETO NO LOCALSTORAGE
// ------------------------------------------------------------
const agendamento = {
    nome:     nome || usuario,
    local,
    data,
    horario
};

localStorage.setItem('agendamentoAtual', JSON.stringify(agendamento));

// ------------------------------------------------------------
// 5. BOTÕES
// ------------------------------------------------------------
function adicionarAgenda() {
    alert('Funcionalidade disponível na versão do app nativo.');
}

function voltarInicio() {
    window.location.href = '../../doador/carteira-doador/index.html';
}