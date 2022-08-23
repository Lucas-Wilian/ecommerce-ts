import React from 'react';
import * as C from './styled';

interface Items {
  title: string;
  product: any;
}

function Layout(item: Items) {
  return (
    <C.Container>
      <C.Title>{item.title}</C.Title>
      <C.Grid>{item.product}</C.Grid>
    </C.Container>
  );
}

export default Layout;
