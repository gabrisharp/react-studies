import { iTarefa } from '../../../types/tarefa';
import style from './Item.module.scss';

interface Prop{
  tarefa: iTarefa,
  selecionaTarefa: (tarefa: iTarefa) => void
}

function Item({tarefa, selecionaTarefa } : Prop) {

  return (
    <li 
      className={
        `${style.item} ${tarefa.selecionado ?
          style.itemSelecionado: ''} ${tarefa.completado ?
          style.itemCompletado : ''}`
      } 
      onClick={() => tarefa.completado || selecionaTarefa(tarefa)}
      >
      <h3>
        {tarefa.nome}
      </h3>
      <span>
        {tarefa.tempo}
      </span>
      {tarefa.completado &&
      <span className={style.concluido} aria-label='Item completado'></span>
      }
    </li>
  )
}

export default Item;