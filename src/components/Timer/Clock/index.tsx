import style from './Clock.module.scss';

interface Props{
  tempo: number | undefined
}

export default function Clock({tempo = 0}:Props){
  const min = Math.floor(tempo / 60);
  const sec = tempo % 60;
  //Para funcionar é preciso editar o arq de configuração
  //"downlevelIteration": true
  const minStr = String(min).padStart(2,'0');
  const secStr = String(sec).padStart(2,'0');
  const [minDez, minUni] = minStr;
  const [secDez, secUni] = secStr;
  if(tempo !== 0) {
    document.title = `${minStr}:${secStr} -` + ' React App';
  }
  return (
    <>
      <span className={style.relogioNumero}>{minDez}</span>
      <span className={style.relogioNumero}>{minUni}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{secDez}</span>
      <span className={style.relogioNumero}>{secUni}</span>
    </>
  )
}