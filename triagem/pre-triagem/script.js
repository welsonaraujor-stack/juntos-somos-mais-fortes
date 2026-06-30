// ============================================================
// PRÉ-TRIAGEM — script.js
// Função única que serve para todas as 8 perguntas
// ============================================================

function responder(numeroPergunta, resposta) {

    const chaves = {
        1: 'peso',
        2: 'idade',
        3: 'sono',
        4: 'saude',
        5: 'tatuagem',
        6: 'gravidez',
        7: 'medicamentos',
        8: 'final'
    };

    const proxima = {
        1: 'pergunta2.html',
        2: 'pergunta3.html',
        3: 'pergunta4.html',
        4: 'pergunta5.html',
        5: 'pergunta6.html',
        6: 'pergunta7.html',
        7: 'pergunta8.html',
        8: null
    };

    // Salva a resposta
    localStorage.setItem(chaves[numeroPergunta], resposta);

    // Pergunta 8 — verifica resultado
    if (numeroPergunta === 8) {
        verificarTriagem();
        return;
    }

    // Avança para a próxima pergunta
    window.location.href = proxima[numeroPergunta];
}

// ============================================================
// VERIFICAÇÃO FINAL
// ============================================================
function verificarTriagem() {

    const peso         = localStorage.getItem('peso');
    const idade        = localStorage.getItem('idade');
    const sono         = localStorage.getItem('sono');
    const saude        = localStorage.getItem('saude');
    const tatuagem     = localStorage.getItem('tatuagem');
    const gravidez     = localStorage.getItem('gravidez');
    const medicamentos = localStorage.getItem('medicamentos');
    const final        = localStorage.getItem('final');

    const impedimentos = [];

    if (peso === 'nao')         impedimentos.push('Peso abaixo de 50 kg');
    if (idade === 'nao')        impedimentos.push('Fora da faixa etária (16 a 69 anos)');
    if (sono === 'nao')         impedimentos.push('Menos de 6 horas de sono nas últimas 24h');
    if (saude === 'sim')        impedimentos.push('Gripe ou resfriado nas últimas 2 semanas');
    if (tatuagem === 'sim')     impedimentos.push('Tatuagem nos últimos 12 meses');
    if (gravidez === 'sim')     impedimentos.push('Grávida ou amamentando');
    if (medicamentos === 'sim') impedimentos.push('Em uso de antibióticos ou medicamentos');
    if (final === 'sim')        impedimentos.push('Cirurgia nos últimos 6 meses');

    localStorage.setItem('impedimentos', JSON.stringify(impedimentos));

    if (impedimentos.length === 0) {
        window.location.href = '../resultado-apto/index.html';
    } else {
        window.location.href = '../resultado-inapto/index.html';
    }
}