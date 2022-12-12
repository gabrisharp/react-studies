import style from './List.module.scss';
import Item from './Item';
import { iTarefa } from '../../types/tarefa';

interface Prop{
  tarefas: iTarefa[],
  selecionaTarefa: (tarefa: iTarefa) => void
}

const List = ({tarefas, selecionaTarefa}: Prop) => {
  return (
    <aside className={style.listaTarefa}>
      <h2> Estudos do Dia </h2>
      <ul>
        {tarefas.map((tarefa) => (
          <Item 
            key={tarefa.id} //Não precisa tipar no component Item
            tarefa={tarefa}
            selecionaTarefa={selecionaTarefa}
          />
        ))}
      </ul>
    </aside>
  )
}

export default List;