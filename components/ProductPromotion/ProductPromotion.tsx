import React from 'react';
import * as C from './styled';
import Image from 'next/image';
import ProductImg from '../Assets/clr.png';

interface Promotion {
  price?: boolean;
  value: string;
}
export default function ProductPromotion(promotion: Promotion) {
  return (
    <C.Container>
      {promotion.price ? (
        <C.ValuePromotion>
          <span>{promotion.value}%</span>
        </C.ValuePromotion>
      ) : null}

      <C.ImgProduct>
        <Image
          src={ProductImg}
          alt='testebimg'
          width={200}
          height={promotion.price ? 150 : 160}
        />
      </C.ImgProduct>

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
      <C.PromotionProduct>ou 1x de 0,00 sem juros no cartão</C.PromotionProduct>
      <C.CardProduct />
    </C.Container>
  );
}
