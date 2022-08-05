import React from 'react';
import * as C from './styled';

export default function Product() {
  return (
    <C.Container>
      <C.ImgProduct />
      <C.NameProduct>
        <p>Smartphone Samsung Galaxy A13 128GB Lilas</p>
      </C.NameProduct>
      <section>
        <C.IconStar />
        <C.IconStar />
        <C.IconStar />
        <C.IconStar />
        <C.IconStar />
      </section>
      <C.PromotionProduct>R$ 0,00</C.PromotionProduct>
      <C.PriceProduct>R$ 0,00</C.PriceProduct>
      <C.CardProduct />
    </C.Container>
  );
}
