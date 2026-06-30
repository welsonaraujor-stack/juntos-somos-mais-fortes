// ============================================================
// HISTÓRICO DE DOAÇÕES — script.js
// ============================================================

// ------------------------------------------------------------
// 1. SALVAR AGENDAMENTO ATUAL NO HISTÓRICO
// (chamado automaticamente quando vem da confirmação)
// ------------------------------------------------------------
const agendamentoAtual = JSON.parse(
    localStorage.getItem('agendamentoAtual') || 'null'
);

if (agendamentoAtual && agendamentoAtual.local) {
    const historico = JSON.parse(
        localStorage.getItem('historicoDoacoes') || '[]'
    );

    // Evita duplicar o mesmo agendamento
    const jaExiste = historico.some(
        h => h.data === agendamentoAtual.data &&
             h.local === agendamentoAtual.local &&
             h.horario === agendamentoAtual.horario
    );

    if (!jaExiste) {
        historico.unshift({
            local:   agendamentoAtual.local,
            data:    agendamentoAtual.data,
            horario: agendamentoAtual.horario,
            status:  'Agendado',
            ml:      450
        });
        localStorage.setItem('historicoDoacoes', JSON.stringify(historico));
    }
}

// ------------------------------------------------------------
// 2. CARREGAR HISTÓRICO
// ------------------------------------------------------------
const historico = JSON.parse(
    localStorage.getItem('historicoDoacoes') || '[]'
);

const lista     = document.getElementById('listaHistorico');
const contador  = document.getElementById('contador');
const totalDoacoes = document.getElementById('totalDoacoes');
const totalVidas   = document.getElementById('totalVidas');
const totalMl      = document.getElementById('totalMl');

// ------------------------------------------------------------
// 3. ATUALIZAR RESUMO
// ------------------------------------------------------------
const doacoesConfirmadas = historico.filter(h => h.status === 'Confirmado').length;
const totalMlDoado       = historico.reduce((acc, h) => acc + (h.ml || 450), 0);
const vidasSalvas        = historico.length * 4;

if (totalDoacoes) totalDoacoes.textContent = historico.length;
if (totalVidas)   totalVidas.textContent   = vidasSalvas;
if (totalMl)      totalMl.textContent      = totalMlDoado + 'ml';
if (contador)     contador.textContent     = `${historico.length} registro${historico.length !== 1 ? 's' : ''}`;

// ------------------------------------------------------------
// 4. RENDERIZAR CARDS OU ESTADO VAZIO
// ------------------------------------------------------------
if (historico.length === 0) {
    lista.innerHTML = `
        <div class="vazio">
            <div class="vazio-icone">
                <i class="fa-solid fa-droplet"></i>
            </div>
            <h3>Nenhuma doação ainda</h3>
            <p>Sua primeira doação aparecerá aqui. Que tal agendar agora?</p>
            <button class="btn-doe" onclick="window.location.href='../../doacao/mapa-unidades/index.html'">
                <i class="fa-solid fa-map-location-dot"></i>
                Encontrar Unidade
            </button>
        </div>
    `;
} else {
    lista.innerHTML = historico.map(item => {
        const data = item.data ? new Date(item.data + 'T00:00:00').toLocaleDateString('pt-BR', {
            day: '2-digit', month: 'long', year: 'numeric'
        }) : '—';

        const statusClass = item.status === 'Confirmado' ? 'confirmado' : 'agendado';

        return `
            <div class="card-doacao">
                <div class="card-icone">
                    <i class="fa-solid fa-droplet"></i>
                </div>
                <div class="card-info">
                    <h3>${item.local || 'Unidade móvel'}</h3>
                    <p><i class="fa-regular fa-calendar"></i>${data}</p>
                    <p><i class="fa-regular fa-clock"></i>${item.horario || '—'}</p>
                </div>
                <span class="card-status ${statusClass}">${item.status}</span>
            </div>
        `;
    }).join('');
}