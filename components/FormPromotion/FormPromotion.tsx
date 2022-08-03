import React from 'react';
import * as C from './syled';

export default function FormPromotion() {
  return (
    <C.Container>
      <div>
        <h3>
          Quer ficar por dentro de tudo?
          <br />
        </h3>
        <span>
          Cadastre-se e receba nossas promoçoes
          <br /> e novidades
        </span>
      </div>

      <C.Inputs>
        <input placeholder='Nome' />
        <input placeholder='Telefone' />
        <C.ButtonInput>Cadastrar</C.ButtonInput>
      </C.Inputs>
    </C.Container>
  );
}
