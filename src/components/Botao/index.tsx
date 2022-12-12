import React, { ReactNode } from 'react';
import style from './Botao.module.scss';

type Props = {
  children?: ReactNode
  type?: 'button' | 'submit' | 'reset',
  onClick?: () => void;
}

class Botao extends React.Component<Props> {
  render() {
    return (
      <button
        className={style.botao}
        type={this.props.type || 'button'}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    )
  }
}

export default Botao;