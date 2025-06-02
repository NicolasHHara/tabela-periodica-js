function saberValorCargaEletrica() {
    let n = parseFloat(prompt("Digite um número para ser o valor de N:"));
    let e = parseFloat(prompt("Digite um número para ser o valor de E:"));
    let q = n * e;

    let divN = document.createElement('div');
    divN.classList.add('elementos');
    divN.textContent = `Valor de N: ${n}`;

    let divE = document.createElement('div');
    divE.classList.add('elementos');
    divE.textContent = `Valor de E: ${e}`;

    let divQ = document.createElement('div');
    divQ.classList.add('elementos');
    divQ.textContent = `Carga elétrica: ${q}`;

    document.body.appendChild(divN);
    document.body.appendChild(divE);
    document.body.appendChild(divQ);
}


function interacaoEntreCargas() {
    let k = parseFloat(prompt("Digite um número para ser o valor de K:"));
    let q1 = parseFloat(prompt("Digite um número para ser o valor de Q1:"));
    let q2 = parseFloat(prompt("Digite um número para ser o valor de Q2:"));
    let r = parseFloat(prompt("Digite um número para ser o valor de R:"));

    let F = k * (q1 * q2) / (r * r);

    let divK = document.createElement('div');
    divK.classList.add('elementos2');
    divK.textContent = `Valor de K: ${elemento.numeroAtomico}`;

    let divQ1 = document.createElement('div');
    divQ1.classList.add('elementos2');
    divQ1.textContent = `Valor de Q1: ${q1}`;

    let divQ2 = document.createElement('div');
    divQ2.classList.add('elementos2');
    divQ2.textContent = `Valor de Q2: ${q2}`;

    let divR = document.createElement('div');
    divR.classList.add('elementos2');
    divR.textContent = `Valor de R: ${r}`;

    let divF = document.createElement('div');
    divF.classList.add('elementos2');
    divF.textContent = `Força de interação (F): ${F}`;

    document.body.appendChild(divK);
    document.body.appendChild(divQ1);
    document.body.appendChild(divQ2);
    document.body.appendChild(divR);
    document.body.appendChild(divF);
}

interacaoEntreCargas();

saberValorCargaEletrica();