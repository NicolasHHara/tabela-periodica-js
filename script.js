function renderTabelePeriodica(){
    const tabelaPeriodica = document.getElementById('tabelaPeriodica');

    let dadoLinha = '';
    for (let linha = 1; linha <= 7; linha++) {
        // abre a tr
        dadoLinha = linha+'TR';
        let dadoColuna = '';
        for (let coluna = 1; coluna <= 18; coluna++) {
            dadoColuna = coluna+'TD';
            dadoColuna.innerHTML = `
        <div class="numero">1</div>
        <div class="simbolo">H</div>
        <div class="nome">Hidrogênio</div>
        <div class="familia">Não-metal</div>
        <div class="massa">1.008</div>
        <div class="estado">Gasoso</div>`;
            console.log(dadoLinha+dadoColuna);    
        }
        // fecha tr
    }    

}



renderTabelePeriodica();