import React from 'react';
import * as C from './styled';

export default function Menu() {
  return (
    <C.Container>
      <div>
        <C.IconBars />
        <span>Todas Catagerias</span>
      </div>
      <span>Celulares</span>
      <span>Informática</span>
      <span>Acessorios</span>
      <span>TV</span>
      <span>Eletrodomesticos</span>
      <span>Outros</span>
    </C.Container>
  );
}
