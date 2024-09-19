const clubes = [
    {
        posicao: 1,
        nome: "Botafogo",
        pontos: 53,
        jogos: 26,
        vitorias: 16,
        empates: 5,
        derrotas: 5,
        golsFeitos: 45,
        golsSofridos: 25,
        saldoGols: 20,
    },
    {
        posicao: 2,
        nome: "Palmeiras",
        pontos: 50,
        jogos: 26,
        vitorias: 15,
        empates: 5,
        derrotas: 6,
        golsFeitos: 43,
        golsSofridos: 19,
        saldoGols: 24,
    },
    {
        posicao: 3,
        nome: "Fortaleza",
        pontos: 49,
        jogos: 26,
        vitorias: 14,
        empates: 7,
        derrotas: 5,
        golsFeitos: 32,
        golsSofridos: 25,
        saldoGols: 7,
    },
    {
        posicao: 4,
        nome: "Flamengo",
        pontos: 45,
        jogos: 25,
        vitorias: 13,
        empates: 6,
        derrotas: 6,
        golsFeitos: 40,
        golsSofridos: 29,
        saldoGols: 11,
    },
    {
        posicao: 5,
        nome: "São Paulo",
        pontos: 44,
        jogos: 26,
        vitorias: 13,
        empates: 5,
        derrotas: 8,
        golsFeitos: 34,
        golsSofridos: 26,
        saldoGols: 8,
    },
    {
        posicao: 6,
        nome: "Bahia",
        pontos: 42,
        jogos: 26,
        vitorias: 12,
        empates: 6,
        derrotas: 8,
        golsFeitos: 37,
        golsSofridos: 27,
        saldoGols: 10,
    },
    {
        posicao: 7,
        nome: "Cruzeiro",
        pontos: 41,
        jogos: 26,
        vitorias: 12,
        empates: 5,
        derrotas: 9,
        golsFeitos: 34,
        golsSofridos: 27,
        saldoGols: 7,
    },
    {
        posicao: 8,
        nome: "Internacional",
        pontos: 38,
        jogos: 24,
        vitorias: 10,
        empates: 8,
        derrotas: 6,
        golsFeitos: 27,
        golsSofridos: 20,
        saldoGols: 7,
    },
    {
        posicao: 9,
        nome: "Vasco da Gama",
        pontos: 35,
        jogos: 25,
        vitorias: 10,
        empates: 5,
        derrotas: 10,
        golsFeitos: 30,
        golsSofridos: 35,
        saldoGols: -5,
    },
    {
        posicao: 10,
        nome: "Atlético-MG",
        pontos: 33,
        jogos: 24,
        vitorias: 8,
        empates: 9,
        derrotas: 7,
        golsFeitos: 32,
        golsSofridos: 36,
        saldoGols: -4,
    },
    {
        posicao: 11,
        nome: "Juventude",
        pontos: 32,
        jogos: 26,
        vitorias: 8,
        empates: 8,
        derrotas: 10,
        golsFeitos: 31,
        golsSofridos: 36,
        saldoGols: -5,
    },
    {
        posicao: 12,
        nome: "Bragantino",
        pontos: 31,
        jogos: 25,
        vitorias: 8,
        empates: 7,
        derrotas: 10,
        golsFeitos: 31,
        golsSofridos: 32,
        saldoGols: -1,
    },
    {
        posicao: 13,
        nome: "Athletico-PR",
        pontos: 30,
        jogos: 24,
        vitorias: 8,
        empates: 6,
        derrotas: 10,
        golsFeitos: 27,
        golsSofridos: 29,
        saldoGols: -2,
    },
    {
        posicao: 14,
        nome: "Grêmio",
        pontos: 28,
        jogos: 24,
        vitorias: 8,
        empates: 4,
        derrotas: 12,
        golsFeitos: 25,
        golsSofridos: 30,
        saldoGols: -5,
    },
    {
        posicao: 15,
        nome: "Criciúma",
        pontos: 28,
        jogos: 25,
        vitorias: 7,
        empates: 7,
        derrotas: 11,
        golsFeitos: 32,
        golsSofridos: 40,
        saldoGols: -8,
    },
    {
        posicao: 16,
        nome: "Fluminense",
        pontos: 27,
        jogos: 25,
        vitorias: 7,
        empates: 6,
        derrotas: 12,
        golsFeitos: 21,
        golsSofridos: 28,
        saldoGols: -7,
    },
    {
        posicao: 17,
        nome: "EC Vitória",
        pontos: 25,
        jogos: 26,
        vitorias: 7,
        empates: 4,
        derrotas: 15,
        golsFeitos: 28,
        golsSofridos: 39,
        saldoGols: -11,
    },
    {
        posicao: 18,
        nome: "Corinthians",
        pontos: 25,
        jogos: 26,
        vitorias: 5,
        empates: 10,
        derrotas: 11,
        golsFeitos: 23,
        golsSofridos: 33,
        saldoGols: -10,
    },
    {
        posicao: 19,
        nome: "Cuiabá",
        pontos: 22,
        jogos: 25,
        vitorias: 5,
        empates: 7,
        derrotas: 13,
        golsFeitos: 23,
        golsSofridos: 38,
        saldoGols: -15,
    },
    {
        posicao: 20,
        nome: "Atlético-GO",
        pontos: 18,
        jogos: 26,
        vitorias: 4,
        empates: 6,
        derrotas: 16,
        golsFeitos: 21,
        golsSofridos: 42,
        saldoGols: -21,
    },
];

// Add uma linha a tabela do index.html
const addLine = (nome, pos, pontos, jogos, vitorias, empates, derrotas, golsMarcados, golSofridos, Saldo) =>{
    const tableSerieA =  document.querySelector("table"); // Seleciona a tabela
    const novaLinha = tableSerieA.insertRow(); // Insere uma nova Linha
    // add uma classe a linha
    novaLinha.classList.add('linha')
    // Cada linha add uma celula nova a linha(novaLinha);
    const cellNome = novaLinha.insertCell(0);
    const cellPos = novaLinha.insertCell(1);
    const cellPonts = novaLinha.insertCell(2);
    const cellJogos = novaLinha.insertCell(3);
    const cellVitorias = novaLinha.insertCell(4);
    const cellEmpates = novaLinha.insertCell(5);
    const cellDerrotas = novaLinha.insertCell(6);
    const cellGolsMarcados = novaLinha.insertCell(7);
    const cellGolSofridos = novaLinha.insertCell(8);
    const cellSaldo = novaLinha.insertCell(9);

    // Add os valores as celulas criadas
    cellNome.innerText = nome; 
    cellPos.innerText = pos;
    cellPonts.innerText = pontos;
    cellJogos.innerText = jogos;
    cellVitorias.innerText = vitorias;
    cellEmpates.innerText = empates;
    cellDerrotas.innerText = derrotas;
    cellGolsMarcados.innerText = golsMarcados;
    cellGolSofridos.innerText = golSofridos;
    cellSaldo.innerText = Saldo;
}

// Itera o aray clubes e chama a funcao AddLine;
const iterateClubes = () => {
    clubes.forEach(element => {
        addLine(element.nome, `${element.posicao}°`, element.pontos, element.jogos, element.vitorias, element.empates,
            element.derrotas, element.golsFeitos, element.golsSofridos, element.saldoGols
        );
    });
}

iterateClubes();