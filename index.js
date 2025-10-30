/**** Escreva o código abaixo 👇******/
function somar(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

function subtrair(a, b) {
  return a - b;
}

function dividir(a, b) {
  if (b === 0) {
    throw new Error("Erro: divisão por zero");
  } else {
    return a / b;
  }
}

function calcularMedia(nota1, nota2, nota3, nota4) {
  const soma = nota1 + nota2 + nota3 + nota4;

  const media = dividir(soma, 4);

  return media;
}

function elevarPotencia(base, expoente) {
  return Math.pow(base, expoente);
}

function calcularAreaRetangulo(largura, altura) {
  const area = multiplicar(largura, altura);
  return area;
}

function verificarParOuImpar(numero) {
  if (numero % 2 == 0) {
    return "par";
  } else {
    return "ímpar";
  }
}

function calcularRaizQuadrada(numero) {
  return Math.sqrt(numero);
}

function calcularHipotenusa(cateto1, cateto2) {
  const quadradoCateto1 = elevarPotencia(cateto1, 2);

  const quadradoCateto2 = elevarPotencia(cateto2, 2);

  const somaDosQuadrados = somar(quadradoCateto1, quadradoCateto2);

  const hipotenusa = calcularRaizQuadrada(somaDosQuadrados);

  return hipotenusa;
}
/**** Escreva o código acima ☝️******/

//Não altere as linhas abaixo
module.exports = {
  somar,
  multiplicar,
  subtrair,
  dividir,
  calcularMedia,
  elevarPotencia,
  calcularAreaRetangulo,
  verificarParOuImpar,
  calcularRaizQuadrada,
  calcularHipotenusa,
};
