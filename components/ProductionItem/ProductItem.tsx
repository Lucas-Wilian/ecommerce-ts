import React from 'react';
import * as C from './styled';
import Image from 'next/image';
import ProductImg from '../Assets/clr.png';

export default function ProductItem() {
  return (
    <C.Container>
      <aside>
        <span>
          página inicial {'>'} celular {'>'} marca {'>'} modelo
        </span>
      </aside>
      <C.Product>
        <C.ProductItem>
          <C.ContainerInfo>
            <span>
              <C.IconHeart />
              <a>favoritar</a>
            </span>
            <span>
              <C.IconShare />
              <a>compartilhar</a>
            </span>
          </C.ContainerInfo>
          <C.ContainerProduct>
            <C.ContainerImg>
              <C.ProductImg>
                <Image src={ProductImg} alt='testebimg' />
              </C.ProductImg>
              <C.CarrosselImg>
                <span>
                  <Image src={ProductImg} alt='testebimg' />
                </span>
                <span>
                  <Image src={ProductImg} alt='testebimg' />
                </span>
                <span>
                  <Image src={ProductImg} alt='testebimg' />
                </span>
                <span>
                  <Image src={ProductImg} alt='testebimg' />
                </span>
                <span>
                  <Image src={ProductImg} alt='testebimg' />
                </span>
              </C.CarrosselImg>
            </C.ContainerImg>
            <C.ProductDetail>
              <h3>Smartphone Samsung Galaxy A13 128GB Lilas</h3>
              <C.StarAvaliation>
                <C.IconStar />
                <C.IconStar />
                <C.IconStar />
                <C.IconStar />
                <C.IconStar />
              </C.StarAvaliation>
              <C.ProductDescription>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic
              </C.ProductDescription>
              <h4>mais informações</h4>
              <span>
                cor: <b>Lilas</b>
              </span>
            </C.ProductDetail>
          </C.ContainerProduct>
        </C.ProductItem>

        <C.ProductPrice>
          <C.PricePromotion>
            <h4>R$ 0,00</h4>
            <C.ValuePromotion>
              <C.IconArrow />
              0%
            </C.ValuePromotion>
          </C.PricePromotion>

          <C.ProductValue>
            <h4>R$ 0,00</h4>
            <span>no Pix</span>
          </C.ProductValue>
          <C.SectionCard>
            <C.IconCard />
            <span>R$ 0,00 em até 0x de 0,00</span>
          </C.SectionCard>
        </C.ProductPrice>
      </C.Product>
    </C.Container>
  );
}
