// =====================
// CARREGAR HISTÓRICO
// =====================

const historico =

JSON.parse(
localStorage.getItem(
"historicoDoacoes"
)
) || [];

const lista =

document.getElementById(
"listaHistorico"
);

if(historico.length === 0){

lista.innerHTML =

"<p>Nenhuma doação encontrada.</p>";

}else{

historico.forEach(item => {

    lista.innerHTML += `

    <div class="card">

        <h3>
        ${item.unidade}
        </h3>

        <p>
        📅 ${item.data}
        </p>

        <p>
        🕒 ${item.horario}
        </p>

        <p>
        ✅ ${item.status}
        </p>

    </div>

    `;

});

}