var p = [   // Array de Pergunta
  { pergunta: '1. De quem é a famosa frase: "Penso, logo existo" ?',
    alternativas: {
      0: "A - Platão",
      1: "B - Sócrates",
      2: "C - Galileu Galilei",
      3: "D - Descartes",
    },
    resposta: 3 
  },

  { pergunta: '2. De onde é a invenção do chuveiro elétrico?',
    alternativas: {
      0: "A - França",
      1: "B - Inglaterra",
      2: "C - Brasil",
      3: "D - Austrália",
    },
    resposta: 2
  },

  { pergunta: '3. Qual o menor e o maior país do mundo, respectivamente ?',
    alternativas: {
      0: "A - Vaticano e Rússia",
      1: "B - Nauru e China",
      2: "C - Mônaco e Canadá",
      3: "D - Malta e Estados Unidos",
    },
    resposta: 0
  },

  { pergunta: '4. Qual o livro mais vendido no mundo, depois da Bíblia?',
    alternativas: {
      0: "A - O Senhor dos Anéis",
      1: "B - Dom Quixote",
      2: "C - O Pequeno Príncipe",
      3: "D - Ela, a Feiticeira",
    },
    resposta: 1
  },

  { pergunta: '5. Quais os países que têm a maior e a menor expectativa de vida do mundo?',
    alternativas: {
      0: "A - Japão e Serra Leoa",
      1: "B - Austrália e Afeganistão",
      2: "C - Itália e Chade",
      3: "D - Estados Unidos e Angola",
    },
    resposta: 0
  },

  { pergunta: '6. O que a palavra legend significa em português?',
    alternativas: {
      0: "A - Legenda",
      1: "B - Conto",
      2: "C - Lenda",
      3: "D - Legendário",
    },
    resposta: 2
  },

  { pergunta: '7. Qual a montanha mais alta do Brasil?',
    alternativas: {
      0: "A - Pico Paraná",
      1: "B - Pico da Neblina",
      2: "C - Pico da Bandeira",
      3: "D - Pico Maior de Friburgo",
    },
    resposta: 1
  },

  { pergunta: '8. Qual a velocidade da luz?',
    alternativas: {
      0: "A - 300 000 000 metros por segundo (m/s)",
      1: "B - 150 000 000 metros por segundo (m/s)",
      2: "C - 199 792 458 metros por segundo (m/s)",
      3: "D -  299 792 458 metros por segundo (m/s)",
    },
    resposta: 3
  },

  { pergunta: '9. Em qual local da Ásia o português é língua oficial?',
    alternativas: {
      0: "A - Portugal",
      1: "B - Filipinas",
      2: "C - Macau",
      3: "D - Moçambique",
    },
    resposta: 2
  },

  { pergunta: '10. “It is six twenty ou twenty past six”. Que horas são em inglês?',
    alternativas: {
      0: "A - 6:20",
      1: "B - 5:40",
      2: "C - 12:00",
      3: "D - 6:02",
    },
    resposta: 0
  },
];
 
var inicio = window.document.getElementById("inicio");  // TELA INICIAL
var tela = window.document.getElementById("quiz"); // TELA DO QUIZ
var tela_final = window.document.getElementById("result"); // TELA FINAL COM RESULTADOS
var perguntaAtualTexto = window.document.getElementById("perguntaAtualTexto"); // PEGANDO O TEXTO
var perguntas = window.document.getElementById("pergunta"); // VARIÁVEL DE PERGUNTAS
var alternativa = []; // ARRAY DE ALTERNATIVAS
var resultado_final = window.document.getElementById("resultado_final"); // VARIÁVEL PARA TEXTO DE RESULTADO FINAL.
var mensagem_final = window.document.getElementById("mensagem_final");

alternativa[0] = window.document.getElementById("resp1");
alternativa[1] = window.document.getElementById("resp2");
alternativa[2] = window.document.getElementById("resp3");
alternativa[3] = window.document.getElementById("resp4");




var n = 0 // Variável para guardar e acrescentar valores ao índice do array que está sendo chamado

function proximaPergunta(){ // Botão Próximo Executando a função de trocar perguntas e respostas de acordo com o índice do Array p

  limparAlternativa();

  if (n === 0) {

    inicio.classList.toggle("inativa");
    tela.classList.toggle("inativa");


  pergunta.innerText = p[0].pergunta;
  alternativa[0].innerText = p[0].alternativas[0];
  alternativa[1].innerText = p[0].alternativas[1];
  alternativa[2].innerText = p[0].alternativas[2];
  alternativa[3].innerText = p[0].alternativas[3];


  } else if(n<=9 && n > 0) {

  pergunta.innerText = p[n].pergunta;
  alternativa[0].innerText = p[n].alternativas[0];
  alternativa[1].innerText = p[n].alternativas[1];
  alternativa[2].innerText = p[n].alternativas[2];
  alternativa[3].innerText = p[n].alternativas[3];

}else {
  tela.classList.toggle("inativa");
  tela_final.classList.toggle("inativa");
}

  var perguntaAtual = n;

  perguntaAtualTexto.innerText = perguntaAtual;

  n++;

  console.log('Indice atual: '+ perguntaAtual);
  console.log(`Pergunta atual: ${perguntaAtual + 1}`);

}

var acertos = a;
var a = 0;
function verificaResposta(alternativaClicada) {
  let perguntaAtual;
  // PEGANDO RESULTADO A PARTIR DO BOTAO DA ALTERNATIVA
  let alternativaSelecionada;
  alternativaSelecionada = alternativaClicada;
  // FIM PEGANDO RESULTADO.

//  VERIFICANDO SE ALTERNATIVA SELECIONADA É IGUAL A RESPOSTA

   perguntaAtual = perguntaAtualTexto.innerText; // PEGANDO TEXTO DA VARIAVEL ESCONDIDA

  // Se a alternativa clicada for igual a resposta da pergunta atual, faça:
  if (alternativaSelecionada === p[perguntaAtual].resposta) {

    alternativa[alternativaSelecionada].classList.add("acerto");
    a++;
    acertos = a;

  } else {

    // INDICE DA ALTERNATIVA = RESPOSTA DA PERGUNTA ATUAL, DENTRO DO ARRAY DE PERGUNTAS.
    alternativa[p[perguntaAtual].resposta].classList.add("acerto");
    alternativa[alternativaSelecionada].classList.add("erro");
  }
  resultado_final.innerText = `Sua pontuação é: ${acertos}/10`
  mensagem_final.innerText = "Obrigado por realizar o QUIZ, caso queira refazê-lo recarregue a página"
}


function limparAlternativa() {

  alternativa[0].classList.remove("erro");
  alternativa[1].classList.remove("erro");
  alternativa[2].classList.remove("erro");
  alternativa[3].classList.remove("erro");

  alternativa[0].classList.remove("acerto");
  alternativa[1].classList.remove("acerto");
  alternativa[2].classList.remove("acerto");
  alternativa[3].classList.remove("acerto");

}

