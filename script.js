function renderTabelePeriodica(){
    const tabelaPeriodica = document.getElementById('tabelaPeriodica');

    let dadoLinha = '';
    for (let linha = 1; linha <= 7; linha++) {
        // abre a tr
        dadoLinha = linha+'TR';
        let dadoColuna = '';
        for (let coluna = 1; coluna <= 18; coluna++) {
            dadoColuna = coluna+'TD';
            console.log(dadoLinha+dadoColuna);    
        }
        // fecha tr
    }    

}



renderTabelePeriodica();