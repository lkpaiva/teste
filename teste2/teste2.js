// Verifica se o ambiente suporta 'fetch'
if (typeof fetch === 'undefined') {
  global.fetch = require('node-fetch'); 
}

async function fetchUserData() {
  try {
    // Fazendo a requisição GET para a API
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if (!response.ok) {
      throw new Error('Erro na requisição: ' + response.status);
    }

    // Obtendo os dados da resposta em formato JSON
    const users = await response.json();

    // Filtrando os usuários cujo username começa com a letra "C"
    const filteredUsers = users.filter(user => user.username.startsWith('C'));

    // Retornando a promessa resolvida com os dados filtrados
    return filteredUsers;

  } catch (error) {
    // Tratamento de erro para capturar qualquer problema na requisição
    console.error('Erro ao buscar dados dos usuários:', error);
    throw error;
  }
}

// Exemplo de uso
fetchUserData()
  .then(filteredUsers => {
    console.log('Usuários filtrados:', filteredUsers);
  })
  .catch(error => {
    console.error('Erro ao processar os dados dos usuários:', error);
  });
