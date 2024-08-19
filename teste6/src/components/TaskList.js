import React, { useState } from 'react';
import '../style/TaskList.css';

const ListaDeTarefas = () => {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');
  const [mostrarConcluidas, setMostrarConcluidas] = useState('todas');
  const [horarioTarefa, setHorarioTarefa] = useState('');
  const [tipoTarefa, setTipoTarefa] = useState('fazer');
  const [editarTarefaIndex, setEditarTarefaIndex] = useState(null);
  const [tarefaEditada, setTarefaEditada] = useState('');
  const [horarioEditado, setHorarioEditado] = useState('');
  const [tipoEditado, setTipoEditado] = useState('fazer');

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      const nova = {
        nome: novaTarefa,
        concluida: false,
        horario: horarioTarefa || 'Sem horário',
        tipo: tipoTarefa,
      };
      
      const tarefasAtualizadas = [...tarefas, nova].sort((a, b) =>
        a.horario > b.horario ? 1 : -1
      );
      
      setTarefas(tarefasAtualizadas);
      setNovaTarefa('');
      setHorarioTarefa('');
      setTipoTarefa('fazer');
    }
  };

  const alternarTarefa = (indice) => {
    const tarefasAtualizadas = tarefas.map((tarefa, i) =>
      i === indice ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    );
    setTarefas(tarefasAtualizadas);
  };

  const iniciarEdicao = (indice) => {
    setEditarTarefaIndex(indice);
    setTarefaEditada(tarefas[indice].nome);
    setHorarioEditado(tarefas[indice].horario);
    setTipoEditado(tarefas[indice].tipo);
  };

  const salvarEdicao = () => {
    const tarefasAtualizadas = tarefas.map((tarefa, i) =>
      i === editarTarefaIndex
        ? { ...tarefa, nome: tarefaEditada, horario: horarioEditado, tipo: tipoEditado }
        : tarefa
    );
    
    setTarefas(tarefasAtualizadas.sort((a, b) =>
      a.horario > b.horario ? 1 : -1
    ));
    
    setEditarTarefaIndex(null);
    setTarefaEditada('');
    setHorarioEditado('');
    setTipoEditado('fazer');
  };

  const excluirTarefa = (indice) => {
    const tarefasAtualizadas = tarefas.filter((_, i) => i !== indice);
    setTarefas(tarefasAtualizadas);
    setEditarTarefaIndex(null);
  };

  const tarefasFiltradas = mostrarConcluidas === 'concluidas'
    ? tarefas.filter(tarefa => tarefa.concluida)
    : mostrarConcluidas === 'pendentes'
      ? tarefas.filter(tarefa => !tarefa.concluida)
      : tarefas;

  return (
    <div className="container-lista-tarefas">
      <h1>Lista de Tarefas</h1>
      
      <input
        type="text"
        placeholder="Digite uma nova tarefa"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        className="input-tarefa"
      />
      
      <div className="opcoes-tarefa">
        <input
          type="time"
          value={horarioTarefa}
          onChange={(e) => setHorarioTarefa(e.target.value)}
          className="input-horario"
        />
        <select
          value={tipoTarefa}
          onChange={(e) => setTipoTarefa(e.target.value)}
          className="input-tipo"
        >
          <option value="fazer">Fazer</option>
          <option value="planejar">Planejar</option>
          <option value="delegar">Delegar</option>
          <option value="eliminar">Eliminar</option>
        </select>
        <select
          value={mostrarConcluidas}
          onChange={(e) => setMostrarConcluidas(e.target.value)}
          className="filtro-tarefas"
        >
          <option value="todas">Todas</option>
          <option value="concluidas">Concluídas</option>
          <option value="pendentes">Pendentes</option>
        </select>
      </div>
      
      <button onClick={adicionarTarefa} className="botao-adicionar">Adicionar</button>
      
      <ul className="lista-tarefas">
        {tarefasFiltradas.map((tarefa, indice) => (
          <li key={indice} className={`tarefa ${tarefa.tipo} ${tarefa.concluida ? 'concluida' : ''}`}>
            <span>{indice + 1}. {tarefa.nome}</span>
            <div className="detalhes-tarefa">
              <span className="horario">{tarefa.horario}</span>
              <button
                onClick={() => alternarTarefa(indice)}
                className={`botao-concluir ${tarefa.concluida ? 'concluida' : ''}`}
              />
              <button onClick={() => iniciarEdicao(indice)} className="botao-editar">Editar</button>
            </div>
          </li>
        ))}
      </ul>

      {editarTarefaIndex !== null && (
        <div className="modal-editar">
          <div className="modal-conteudo">
            <h3>Editar Tarefa</h3>
            
            <input
              type="text"
              value={tarefaEditada}
              onChange={(e) => setTarefaEditada(e.target.value)}
              className="input-tarefa"
            />
            
            <input
              type="time"
              value={horarioEditado}
              onChange={(e) => setHorarioEditado(e.target.value)}
              className="input-horario"
            />
            
            <select
              value={tipoEditado}
              onChange={(e) => setTipoEditado(e.target.value)}
              className="input-tipo"
            >
              <option value="fazer">Fazer</option>
              <option value="planejar">Planejar</option>
              <option value="delegar">Delegar</option>
              <option value="eliminar">Eliminar</option>
            </select>
            
            <div className="acoes-editar">
              <button onClick={salvarEdicao} className="botao-salvar">Salvar</button>
              <button onClick={() => excluirTarefa(editarTarefaIndex)} className="botao-excluir">Excluir</button>
              <button onClick={() => setEditarTarefaIndex(null)} className="botao-cancelar">Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListaDeTarefas;
