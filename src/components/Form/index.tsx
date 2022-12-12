import React from 'react';
import Botao from '../Botao';
import style from './Form.module.scss';
import { iTarefa } from '../../types/tarefa';
import { v4 as uuid } from 'uuid';

class Form extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<iTarefa[]>>
}> {
  state = {
    nome: '',
    tempo: '00:00'
  }
  adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.setTarefas(prevState =>
      [...prevState,
      {
        ...this.state,
        selecionado: false,
        completado: false,
        id: uuid() //Criando um id para o item, para saber qual foi selecionado
      }]);
    //Para resetar o formulário
    this.setState({
      nome: '',
      tempo: '00:00'
    })
  }
  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor='tarefa'>

          </label>
          <input
            type="text"
            name="tarefe"
            id="tarefa"
            placeholder="O que você quer estudar"
            value={this.state.nome}
            //usando o spread op para manter alterações em nome e tempo
            onChange={e => this.setState({ ...this.state, nome: e.target.value })}
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">

          </label>
          <input
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            value={this.state.tempo}
            //usando o spread op para manter alterações em nome e tempo
            onChange={e => this.setState({ ...this.state, tempo: e.target.value })}
            required
          />
        </div>
        <Botao type="submit">
          Adicionar
        </Botao>
      </form>
    )
  }
}

export default Form;