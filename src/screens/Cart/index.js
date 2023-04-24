import {
  Container,
  ContainerScroll,
  ButtonGoShopping,
  TextGoShopping,
  ButtonGoCheckout,
  TextGoCheckout
} from "./styles";
import { useNavigation } from '@react-navigation/native';
import CartProductCard from '../../components/CartProductCard'

export function Cart() {

  const navigation = useNavigation();

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
        <CartProductCard />
        <CartProductCard />

        <ButtonGoCheckout>
          <TextGoCheckout>Checkout</TextGoCheckout>
        </ButtonGoCheckout>

        <ButtonGoShopping onPress={()=>{navigation.navigate('Home')}}>
          <TextGoShopping>Continuar comprando</TextGoShopping>
        </ButtonGoShopping>

       
      </ContainerScroll>  
    </Container>
  );
}
