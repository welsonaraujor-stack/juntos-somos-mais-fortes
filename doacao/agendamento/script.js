// ============================================================
// AGENDAMENTO — script.js
// ============================================================

// ------------------------------------------------------------
// 1. PREENCHER UNIDADE VINDA DO MAPA
// ------------------------------------------------------------
const nomeUnidade     = localStorage.getItem('unidadeNome')     || 'Parque Ibirapuera';
const enderecoUnidade = localStorage.getItem('unidadeEndereco') || 'Av. Pedro Álvares Cabral';
const imagemUnidade   = localStorage.getItem('unidadeImagem')   || 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400';

const nomeEl     = document.getElementById('nomeUnidade');
const enderecoEl = document.getElementById('enderecoUnidade');
const resumoEl   = document.getElementById('resumoLocal');
const imagemEl   = document.getElementById('imagemUnidade');

if (nomeEl)     nomeEl.textContent   = nomeUnidade;
if (resumoEl)   resumoEl.textContent = nomeUnidade;
if (imagemEl)   imagemEl.src         = imagemUnidade;
if (enderecoEl) enderecoEl.innerHTML =
    `<i class="fa-solid fa-location-dot"></i> ${enderecoUnidade}`;

// ------------------------------------------------------------
// 2. SELECIONAR HORÁRIO
// ------------------------------------------------------------
function selecionarHorario(btn) {
    document.querySelectorAll('.horario').forEach(b => b.classList.remove('ativo'));
    btn.classList.add('ativo');
    const resumoHorario = document.getElementById('resumoHorario');
    if (resumoHorario) resumoHorario.textContent = btn.textContent.trim();
}
// Colorir horários conforme vagas
document.querySelectorAll('.horario:not(.indisponivel)').forEach(btn => {
    const vagas = parseInt(btn.dataset.vagas);
    if (vagas <= 3) {
        btn.classList.add('poucas-vagas');
    }
});

// ------------------------------------------------------------
// 3. ATUALIZA RESUMO AO MUDAR DATA
// ------------------------------------------------------------
document.getElementById('data').addEventListener('change', function () {
    const data = new Date(this.value + 'T00:00:00');
    const formatada = data.toLocaleDateString('pt-BR', {
        weekday: 'long', day: '2-digit', month: 'long'
    });
    const resumoData = document.getElementById('resumoData');
    if (resumoData) resumoData.textContent = formatada;
});

// ------------------------------------------------------------
// 4. CONFIRMAR AGENDAMENTO
// ------------------------------------------------------------
function confirmarAgendamento() {
    const data    = document.getElementById('data').value;
    const horario = document.querySelector('.horario.ativo')?.textContent?.trim();

    if (!data) {
        alert('Por favor, escolha uma data.');
        return;
    }

    if (!horario) {
        alert('Por favor, escolha um horário.');
        return;
    }

    localStorage.setItem('agendamentoData',    data);
    localStorage.setItem('agendamentoHorario', horario);
    localStorage.setItem('agendamentoLocal',   nomeUnidade);
    localStorage.setItem('agendamentoImagem',  imagemUnidade);

    window.location.href = '../confirmacao/index.html';
}