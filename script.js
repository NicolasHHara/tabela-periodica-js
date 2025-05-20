
//função para carregar os dados do arquivo JSON
async function carregarDados() {
    try {
        //carrega arquivo json
        const response = await fetch('dados.json');
        const elementos = await response.json();
        renderTabelaPeriodica(elementos);
    } catch (error) {
        console.error('Erro ao carregar os dados:', error);
    }
}
function renderTabelaPeriodica(elementos) {
    //cria tabela
    const tabelaPeriodica = document.createElement('table');
    tabelaPeriodica.classList.add('tabela-periodica');

    //cria linhas
    for (let linha = 1; linha <= 7; linha++) {
        const linhas = document.createElement('tr');
        linhas.classList.add('tabelaLinha');

        for (let coluna = 1; coluna <= 18; coluna++) {
            //cria colunas
            const colunas = document.createElement('td');
            colunas.classList.add('tabelaColuna');

            //encontra o elemento
            const elemento = elementos.find(
                (el) => el.linha === linha && el.coluna === coluna
            );

            if (elemento) {
                colunas.innerHTML = `
                    <div class="container" style="background-color: #${elemento.corHexCpk || 'FFFFFF'}">
                        <div class="numero">${elemento.numeroAtomico}</div>
                        <div class="simbolo">${elemento.simbolo}</div>
                        <div class="nome">${elemento.nome}</div>
                        <div class="massa">${elemento.densidade}</div>
                    </div>
                `;
            }

            //coluna vira filho da linha
            linhas.appendChild(colunas);
        }

        //linha vira filho da tabela
        tabelaPeriodica.appendChild(linhas);
    }

    const main = document.querySelector('main');
    //tabela vira filho do main
    main.appendChild(tabelaPeriodica);
}

//executa a funcao carregarDados
carregarDados();