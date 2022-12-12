import { useState } from 'react';
import Formulario from '../components/Form';
import Lista from '../components/List';
import Timer from '../components/Timer';
import style from './App.module.scss';
import { iTarefa } from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<iTarefa[]>([]);
  const [selected, setSelected] = useState<iTarefa>();

  function selectTarefa(selectedTarefa: iTarefa) {
    setSelected(selectedTarefa);
    //Setar selecionado para true para realçar
    setTarefas( oldTarefas => oldTarefas.map( tarefa =>({
      ...tarefa,
      selecionado: tarefa.id === selectedTarefa.id ? true : false
    })))
  }

  function finalizarTarefa(){
    if(selected){
      setSelected(undefined);
      setTarefas(oldTarefas => oldTarefas.map( tarefa =>{
        if(tarefa.id === selected.id){
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      {/*Formulario write tarefas */}
      <Formulario setTarefas={setTarefas} />
      {/*Lista read tarefas */}
      <Lista
        tarefas={tarefas}
        selecionaTarefa={selectTarefa}
      />
      <Timer 
        selecionado={selected}
        finalizarTarefa={finalizarTarefa}
      />
    </div>
  );
}

export default App;
