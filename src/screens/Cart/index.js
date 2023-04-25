import {
  Container,
  ContainerScroll,
  ButtonGoShopping,
  TextGoShopping,
  ButtonGoCheckout,
  TextGoCheckout,
  WrapperButtons,
  WrapperTotalCart,
  RowSpaceBetween,
  TextTotal,
  TextTotalPrice,
  Divider
} from "./styles";

import { useNavigation } from '@react-navigation/native';
import CartProductCard from '../../components/CartProductCard'
import {View} from 'react-native';
export function Cart() {

  const navigation = useNavigation();

  
  return (
    <Container> 
      <ContainerScroll
         contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
        style={{ 
          width: "100%",           
      }}
        vertical
      >
        <View>
          <CartProductCard />
          <CartProductCard />
          <CartProductCard />
        </View>
        
      <WrapperTotalCart>
        <RowSpaceBetween>
          <TextTotal>Subtotal</TextTotal>
          <TextTotal>R$ 2800,00</TextTotal>
        </RowSpaceBetween>

        <RowSpaceBetween>
          <TextTotal>Desconto</TextTotal>
          <TextTotal>R$ 0,00</TextTotal>
        </RowSpaceBetween>

        <RowSpaceBetween>
          <TextTotal>Juros</TextTotal>
          <TextTotal>R$ 0,00</TextTotal>
        </RowSpaceBetween>

        <RowSpaceBetween>
          <TextTotal>Frete</TextTotal>
          <TextTotal>R$ 55,95</TextTotal>
        </RowSpaceBetween>

        <Divider />

        <RowSpaceBetween>
          <TextTotal>Total do pedido</TextTotal>
          <TextTotalPrice>R$ 2855,95</TextTotalPrice>
        </RowSpaceBetween>

        <RowSpaceBetween>
          <TextTotal></TextTotal>
          <TextTotal>ou 10x de 119,99</TextTotal>
        </RowSpaceBetween>

      </WrapperTotalCart>
        
        <WrapperButtons>
          <ButtonGoCheckout>
            <TextGoCheckout>Checkout</TextGoCheckout>
          </ButtonGoCheckout>

          <ButtonGoShopping onPress={()=>{navigation.navigate('Home')}}>
            <TextGoShopping>Continuar comprando</TextGoShopping>
          </ButtonGoShopping>
        </WrapperButtons>
       
      </ContainerScroll>  
    </Container>
  );
}
