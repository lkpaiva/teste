function agruparPorCategoria(itens) {
  // Inicializa um objeto vazio para armazenar os itens agrupados por categoria
  const agrupados = {};

  // Itera sobre cada item do array 'itens'
  itens.forEach(item => {
    const categoria = item.categoria;

    // Se a categoria já existe no objeto 'agrupados', adiciona o item ao array correspondente
    if (agrupados[categoria]) {
      agrupados[categoria].push(item);
    } else {
      // Se a categoria ainda não existe, inicializa um array com o item
      agrupados[categoria] = [item];
    }
  });

  // Retorna o objeto com os itens agrupados por categoria
  return agrupados;
}

// Exemplo de uso
const itens = [
  { nome: 'maçã', categoria: 'fruta' },
  { nome: 'cenoura', categoria: 'legume' },
  { nome: 'banana', categoria: 'fruta' },
  { nome: 'brócolis', categoria: 'legume' }
];

const resultado = agruparPorCategoria(itens);
console.log(resultado);
