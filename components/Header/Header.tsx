import React from 'react';
import * as C from './styled';
import Link from 'next/link';

export default function Header() {
  // Dentro desse componete e onde o usuario irá:
  // 1 - Pesquisasr algum produto
  // 2 - fazer login
  // 3 - ver quantos produtos ele marcou como os favoritos
  // 4 - ver os produtos que ele deseja comprar
  // Obs.: os requisitos 3, e 4 so devem seguir em frete caso ele esteja logado

  return (
    <C.Container>
      <C.Menu>
        <Link href='/'>
          <a>
            <C.Logo>
              <C.IconLogo />
              <p>BLANK</p>
            </C.Logo>
          </a>
        </Link>
        <C.Layout>
          <C.Grid>
            <C.SearchInput>
              <input placeholder='Pesquise o produto que deseja :) ' />
              <C.IcontSearch />
            </C.SearchInput>
            <C.User>
              <div>
                <C.IconLogin />
                <p>
                  Faça seu login
                  <br /> ou cadastre-se
                </p>
              </div>

              <span>
                <C.IconHeart />
                <p>+9</p>
              </span>
              <span>
                <C.IconShopping />
                <p>3</p>
              </span>
            </C.User>
          </C.Grid>
          <C.SubMenu>
            <span>Seja nosso cliente</span>

            <span>Nossa assistencia</span>

            <span>Receba nossas promoções</span>

            <span>Duvidas e Ajuda</span>
          </C.SubMenu>
        </C.Layout>
      </C.Menu>
    </C.Container>
  );
}
