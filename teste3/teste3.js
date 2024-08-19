function contarOcorrencias(lista) {
  // Inicializa um objeto vazio para armazenar as contagens
  const contagem = {};

  // Itera sobre cada item da lista
  lista.forEach(item => {
    // Se o item já existe no objeto 'contagem', incrementa o valor
    if (contagem[item]) {
      contagem[item]++;
    } else {
      // Se o item ainda não existe, inicializa o valor com 1
      contagem[item] = 1;
    }
  });

  // Retorna o objeto com as contagens
  return contagem;
}

// Exemplo de uso
const frutas = ['maçã', 'banana', 'maçã', 'laranja', 'banana', 'maçã'];
const resultado = contarOcorrencias(frutas);
console.log(resultado);
