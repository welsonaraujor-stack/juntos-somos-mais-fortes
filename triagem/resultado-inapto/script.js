// Mostra os motivos do impedimento vindos do triagem.js
const MOTIVOS = {
    pergunta1: 'Peso abaixo de 50 kg',
    pergunta2: 'Fora da faixa etária (16 a 69 anos)',
    pergunta3: 'Menos de 6 horas de sono nas últimas 24h',
    pergunta4: 'Gripe ou resfriado nas últimas 2 semanas',
    pergunta5: 'Tatuagem nos últimos 12 meses',
    pergunta6: 'Grávida ou amamentando',
    pergunta7: 'Em uso de antibióticos ou medicamentos',
    pergunta8: 'Cirurgia nos últimos 6 meses'
};

const RESPOSTAS_RUINS = {
    pergunta1: 'nao',
    pergunta2: 'nao',
    pergunta3: 'nao',
    pergunta4: 'sim',
    pergunta5: 'sim',
    pergunta6: 'sim',
    pergunta7: 'sim',
    pergunta8: 'sim'
};

const lista = document.getElementById('listaMotivos');

if (lista) {
    let encontrou = false;
    for (const [chave, respostaRuim] of Object.entries(RESPOSTAS_RUINS)) {
        if (localStorage.getItem(chave) === respostaRuim) {
            encontrou = true;
            lista.innerHTML += `
                <div class="motivo-item">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    ${MOTIVOS[chave]}
                </div>`;
        }
    }
    if (!encontrou) {
        lista.innerHTML = `
            <div class="motivo-item">
                <i class="fa-solid fa-circle-info"></i>
                Algumas respostas indicam que você deve aguardar antes de doar.
            </div>`;
    }
}