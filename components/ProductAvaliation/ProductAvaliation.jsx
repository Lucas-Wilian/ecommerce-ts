import React from 'react';
import * as C from './styled';

export default function ProductAvaliation() {
  return (
    <C.Container>
      <h2>avaliações</h2>`
      <section>
        <C.ContainerAvaliation>
          <C.Avaliation>4.5</C.Avaliation>
          <C.IconStar />
          <C.IconStar />
          <C.IconStar />
          <C.IconStar />
          <C.IconStar />
          <p>16 pessoas avaliaram esse produto</p>
        </C.ContainerAvaliation>
        <C.ButtonAvaliation>Avaliar produto</C.ButtonAvaliation>
        <C.AvaliationUser>
          <ul>
            <li>
              <span>5</span>
              <C.IconStar />
              <C.Bar />
            </li>

            <li>
              <span>5</span>
              <C.IconStar />
              <C.Bar />
            </li>

            <li>
              <span>5</span>
              <C.IconStar />
              <C.Bar />
            </li>

            <li>
              <span>5</span>
              <C.IconStar />
              <C.Bar />
            </li>

            <li>
              <span>5</span>
              <C.IconStar />
              <C.Bar />
            </li>
          </ul>
        </C.AvaliationUser>
      </section>
    </C.Container>
  );
}
