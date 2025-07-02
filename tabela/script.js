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
    tabela.classList.add('tabelaPeriodica');

    const main = document.querySelector('main');

    visorElemento = document.createElement('div');
    visorElemento.classList.add('visorElemento');

    main.appendChild(visorElemento);

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

                const innerDiv = document.createElement('div');
                innerDiv.classList.add("containerElementos")
                innerDiv.draggable = true;
                innerDiv.ondragstart = dragstart_handler;

                innerDiv.innerHTML = `
                        <div class="elementoNumero">${elemento.numeroAtomico}</div>
                        <div class="elementoSimbolo">${elemento.simbolo}</div>
                        <div class="elementoNome">${elemento.nome}</div>
                        <div class="elementoMassa">${elemento.massaAtomica}</div>
                `;

                innerDiv.addEventListener('click', () => {
                    mostrarDadosElemento(elemento);
                    adicionarAoAside(elemento);
                });

                div.appendChild(innerDiv);
                td.appendChild(div);
            }
            tr.appendChild(td);
        }
        tabela.appendChild(tr);
    }
    main.appendChild(tabela);
}

function mostrarDadosElemento(elemento) {
    visorElemento.innerHTML = `
        <div class="containerTabela" style="background-color: ${elemento.corGrupo || '#FFFFFF'}">
            <div class="simboloTabela">${elemento.simbolo}</div>
            <div class="nomeTabela">Nome: ${elemento.nome}</div>
            <div class="grupoTabela">Grupo: ${elemento.grupo}</div>
            <div class="estadoElemento">Estado Padrão: ${elemento.estadoPadrao}</div>
        </div>
    `;
}

function calcularElementos(elemento){
    alert("SDADASDAD")
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
    const container = document.getElementById('itensAside');

    const elementoAside = document.createElement('div');
    elementoAside.classList.add('containerElementosAside');
    elementoAside.innerHTML = `<p>${elemento.simbolo} - ${elemento.nome}</p>`;

    asideArray.push(elementoAside);
    container.appendChild(elementoAside);
}


function dragstart_handler(event) {
    console.log("dragStart");
    event.dataTransfer.setData("text/plain", event.target.className);
}

criarAside();
renderTabelaPeriodica(colecaoElementos);