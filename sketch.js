let palavra; // comprimento da palavra

function setup() { //configurações
  createCanvas(400, 400); // criar tela

  palavra = palavraAleatoria(); // palavra aleatoria
}

function palavraAleatoria(){
  let palavras = ["Piqumaria", "Piquisa", "Piqupedro"]; // palavras aleatorias
  return random(palavras); // retornar palavras aleatorias
}

function inicializaCores() { // inicializa as cores

  background("rgb(197,157,157)"); // fundo branco
  fill("darkred"); // palavra de cor preta
  textSize(64); // tamanho da palavra
  textAlign(CENTER, CENTER); // texto alinhado ao centro
}

function palavraParcial(minimo, maximo) { //configuração das palavras
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length); //comprimento da palavra
  let parcial = palavra.substring(0, quantidade); //deixa palavar parcial
  return parcial; //retorno parcial
}

function draw() { //configuração do desenho
 
  inicializaCores(); //inicializa cores

  let texto = palavraParcial(0, width); // deixar tudo parcial
  text(texto, 200, 200); // local do texto
}
