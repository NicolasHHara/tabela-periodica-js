
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
let visorElemento;
let asideArray = [];
let asideContainer;

function renderTabelaPeriodica(elementos) {
    const tabela = document.createElement('table');
    tabela.classList.add('tabela-periodica');

    visorElemento = document.createElement('div');
    visorElemento.classList.add('visorElemento');

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

                div.addEventListener('click', () => {
                    mostrarDadosElemento(elemento);
                    adicionarAoAside(elemento);
                });

                td.appendChild(div);
            }

            tr.appendChild(td);
        }

        tabela.appendChild(tr);
    }

    tabela.appendChild(visorElemento);

    const main = document.querySelector('main');
    main.appendChild(tabela);
}

function mostrarDadosElemento(elemento) {
    visorElemento.innerHTML = `
        <div class="containerTabela" style="background-color: ${elemento.corGrupo || '#FFFFFF'}">
            <div class="simboloTabela">${elemento.simbolo}</div>
            <div class="nomeTabela">Nome Do Elemento: ${elemento.nome}</div>
            <div class="grupoTabela">Grupo Do Elemento: ${elemento.grupo}</div>
            <div class="estadoElemento">Estado Padrão Do Elemento: ${elemento.estadoPadrao}</div>
        </div>
    `;
}

function criarAside() {
    asideContainer = document.createElement('aside');
    asideContainer.classList.add('aside');
    asideContainer.innerHTML = `
        <div class="containerAside">
            <h1 class="tituloAside">Carrinho Aside</h1>
            <div class="itensAside" id="itensAside"></div>
        </div>
    `;
    document.body.appendChild(asideContainer);
}

function adicionarAoAside(elemento) {
    const Container = document.getElementById('itensAside');

    const elementoAside = document.createElement('div');
    elementoAside.classList.add('itemElemento');
    elementoAside.innerHTML = `
        <p>${elemento.simbolo} - ${elemento.nome}</p>
    `;
    asideArray.push(elementoAside);
    asideContainer.appendChild(elementoAside);
}

renderTabelaPeriodica(colecaoElementos);
criarAside();
