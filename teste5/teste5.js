function mesclarArrays(array1, array2) {
  // Inicializa um objeto vazio para armazenar os itens mesclados por id
  const itensMesclados = {};

  // Itera sobre o primeiro array e adiciona cada item ao objeto 'itensMesclados'
  array1.forEach(item => {
    itensMesclados[item.id] = { ...item };
  });

  // Itera sobre o segundo array, mesclando os itens com o mesmo id ou adicionando novos
  array2.forEach(item => {
    if (itensMesclados[item.id]) {
      // Se o id já existe, mescla as propriedades do item atual com as propriedades já existentes
      itensMesclados[item.id] = { ...itensMesclados[item.id], ...item };
    } else {
      // Se o id não existe, adiciona o novo item ao objeto 'itensMesclados'
      itensMesclados[item.id] = { ...item };
    }
  });

  // Retorna os valores do objeto 'itensMesclados' como um array
  return Object.values(itensMesclados);
}

// Exemplo de uso
const array1 = [
  { id: 1, nome: 'Alice', idade: 25 },
  { id: 2, nome: 'Bruno', idade: 30 }
];

const array2 = [
  { id: 1, idade: 26, email: 'alice@exemplo.com' },
  { id: 3, nome: 'Carlos', idade: 22 }
];

const resultado = mesclarArrays(array1, array2);
console.log(resultado);
