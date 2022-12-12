import Botao from "../Botao";
import Clock from './Clock';
import style from './Timer.module.scss';
import { convertToSeconds } from '../../common/utils/time';
import { iTarefa } from "../../types/tarefa";
import { useState, useEffect } from 'react';

interface Props {
  selecionado: iTarefa | undefined;
  finalizarTarefa: () => void;
}
/*Caso seja colocado um if com mudança de state onde o if sempre é true
  Irá renderizar eternamenta já que em mudança de state sempre obrigará a reler 
  o arquivo denovo e denovo */

const Timer = ({ selecionado, finalizarTarefa }: Props) => {
  const [tempo, setTempo] = useState<number>(0);

  useEffect(() =>{
    if(selecionado?.tempo){
      setTempo(convertToSeconds(selecionado.tempo))
    }
  }, [selecionado]);
  
  function regressiva(contador: number){
    
    setTimeout(()=>{
      if(contador >0){
        setTempo(--contador);
        return regressiva(contador);
      }
      finalizarTarefa();
    }, 1000)
  }
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}> Escolha um Card e inicie o cronometro</p>
      <div className={style.relogioWrapper}>
        <Clock tempo= {tempo}/>
      </div>
      <Botao onClick={() => regressiva(tempo)}> Começar! </Botao>
    </div>
  )
}
export default Timer;