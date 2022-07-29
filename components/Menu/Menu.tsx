import React from 'react';
import * as C from './styled';

export default function Menu() {
  // Dentro desse componete e onde o usuario irá:
  // 1 - Pesquisasr algum produto
  // 2 - fazer login
  // 3 - ver quantos produtos ele marcou como os favoritos
  // 4 - ver os produtos que ele deseja comprar
  // Obs.: os requisitos 3, e 4 so devem seguir em frete caso ele esteja logado

  return (
    <C.Container>
      <div>
        <div>Img</div>
        <div>Input</div>
        <div>
          <div>Login</div>
          <div>Favoritos</div>
        </div>
      </div>
      <div>Sub-Menu</div>
    </C.Container>
  );
}
