import {
  Container,
  ContainerScroll
} from "./styles";

import CartProductCard from '../../components/CartProductCard'

export function Cart() {
  return (
    <Container> 
      <ContainerScroll
         contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        style={{ 
          width: "100%",           
      }}
        vertical
      >
        <CartProductCard />
      </ContainerScroll>  
    </Container>
  );
}
