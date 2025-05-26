
/*função para carregar os dados do arquivo JSON
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
*/

function renderTabelaPeriodica(elementos) {
    const tabela = document.createElement('table');
    tabela.classList.add('tabela-periodica');

    for (let linha = 1; linha <= 10; linha++) {
        const tr = document.createElement('tr');
        tr.classList.add('tabelaLinha');

        for (let coluna = 1; coluna <= 18; coluna++) {
            const td = document.createElement('td');
            td.classList.add('tabelaColuna');

            const elemento = elementos.find(
                (el) => el.linha === linha && el.coluna === coluna
            );

            if (elemento) {
                const div = document.createElement('div');
                div.classList.add('container');
                div.style.backgroundColor = elemento.corGrupo || '#FFFFFF';
                div.innerHTML = `
                    <div class="numero">${elemento.numeroAtomico}</div>
                    <div class="simbolo">${elemento.simbolo}</div>
                    <div class="nome">${elemento.nome}</div>
                    <div class="massa">${elemento.massaAtomica}</div>
                `;

                div.addEventListener('click', () => mostrarDadosElemento(elemento));

                td.appendChild(div);
            }

            tr.appendChild(td);
        }

        tabela.appendChild(tr);
    }

    const main = document.querySelector('main');
    main.appendChild(tabela);
}

function mostrarDadosElemento(elemento) {
  
    const existente = document.querySelector('.tabelaElemento');
    if (existente) {
        existente.remove();
    }

    const painel = document.createElement('div');
    painel.classList.add('tabelaElemento');
    painel.innerHTML = `
        <div class="containerTabela" style="background-color: ${elemento.corGrupo || '#FFFFFF'}">
            <div class="numeroTabela">${elemento.numeroAtomico}</div>
            <div class="simboloTabela">${elemento.simbolo}</div>
            <div class="nomeTabela">${elemento.nome}</div>
            <div class="massaTabela">${elemento.massaAtomica}</div>
        </div>
    `;
    
    document.querySelector('main').appendChild(painel);
}


renderTabelaPeriodica(colecaoElementos);
