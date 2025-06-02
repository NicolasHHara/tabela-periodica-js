
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

//visor que aparece o Elemento
let visorElemento;

//array que armazena os produtos
let asideArray = [];

//container criado ao lado o Carrinho
let asideContainer;


//funcao para gerar a tabela Periodica
function renderTabelaPeriodica(elementos) {

    //cria uma table com a classe de 'tabela-periodica'
    const tabela = document.createElement('table');
    tabela.classList.add('tabela-periodica');

    const main = document.querySelector('main');

    //cria uma div com a funcao de visor e adiciona a classe 'visorElemento'
    visorElemento = document.createElement('div');
    visorElemento.classList.add('visorElemento');

    //torna a variavel main pai do visor
    main.appendChild(visorElemento);

    //cria um laco de repeticao para gerar as colunas e linhas da tabela
    for (let linha = 1; linha <= 10; linha++) {
        const tr = document.createElement('tr');
        tr.classList.add('tabelaLinha');

        for (let coluna = 1; coluna <= 18; coluna++) {
            const td = document.createElement('td');
            td.classList.add('tabelaColuna');

            //acha os elemntos na pasta do lado
            const elemento = elementos.find(
                (el) => el.linha === linha && el.coluna === coluna
            );
            
            //cria uma condicao
            if (elemento) {
                //cria uma div, adiciona uma classe 'container' e da cor a ele
                const div = document.createElement('div');
                div.classList.add('container');
                div.style.backgroundColor = elemento.corGrupo || '#FFFFFF';

                //cria os elementos podendo arrastar
                const innerDiv = document.createElement('div');
                innerDiv.draggable = true;
                innerDiv.ondragstart = dragstart_handler;

                //adiona a div no HTML
                innerDiv.innerHTML = `
                    <div class="numero">${elemento.numeroAtomico}</div>
                    <div class="simbolo">${elemento.simbolo}</div>
                    <div class="nome">${elemento.nome}</div>
                    <div class="massa">${elemento.massaAtomica}</div>
                `;

                //adiciona uma evento de click para a div arrastavel
                innerDiv.addEventListener('click', () => {
                    mostrarDadosElemento(elemento);
                    adicionarAoAside(elemento);
                });

                //torna as divs 'innerDiv' filha da div 'div', e a 'div' filha da 'td'
                div.appendChild(innerDiv);
                td.appendChild(div);
            }
            //'tr' vira pai da 'td'
            tr.appendChild(td);
        }
        //'tabela' vira pai do 'tr'
        tabela.appendChild(tr);
    }
    //'main' vira pai da 'tablela'
    main.appendChild(tabela);
}

//funcao de renderizar os elementos no aside
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

//funcao para criar o aside
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
    elementoAside.classList.add('itemElemento');
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