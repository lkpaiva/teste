function transformarDados(usuarios) {
  // Usa reduce para criar um novo array contendo apenas os usuários ativos
  const usuariosAtivos = usuarios.reduce((resultado, usuario) => {
    // Verifica se o usuário está ativo
    if (usuario.isActive) {
      // Adiciona o usuário ao array resultado com apenas as propriedades id e name
      resultado.push({ id: usuario.id, nome: usuario.name });
    }
    return resultado;
  }, []);

  // Ordena o array de usuários ativos pelo nome em ordem alfabética
  return usuariosAtivos.sort((a, b) => a.nome.localeCompare(b.nome));
}

// Exemplo de uso
const usuarios = [
  { id: 1, nome: 'Alice', idade: 25, isActive: true },
  { id: 2, nome: 'Bob', idade: 30, isActive: false },
  { id: 3, nome: 'Charlie', idade: 22, isActive: true }
];

const resultado = transformarDados(usuarios);
console.log(resultado);
