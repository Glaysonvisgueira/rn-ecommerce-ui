import {
    ProductCard,  
    ImageProduct,
    Content,
    TitleProduct,
    WrapperQuantityButtons,
    ButtonIcon,
    Quantity  
  } from "./styles";
  import { useState } from 'react';
  import { FontAwesome5 } from '@expo/vector-icons'; 
  export default function CartProductCard(props) {

    const [quantityProduct, setQuantityProduct] = useState(0)

    function increaseProductQuantity(){
      setQuantityProduct(prev => prev + 1)
    }

    function decreaseProductQuantity(){
      setQuantityProduct(prev => prev - 1)
    }

    return (
      <ProductCard>     
       <ImageProduct/>
       <Content>
        <TitleProduct>
          PRODUTO
        </TitleProduct>

        <WrapperQuantityButtons>

          <ButtonIcon onPress={decreaseProductQuantity}>
            <FontAwesome5 name="minus" size={14} color="white" />
          </ButtonIcon>

          <Quantity>
            {quantityProduct}
          </Quantity>
          
          <ButtonIcon onPress={increaseProductQuantity}>
            <FontAwesome5 name="plus" size={14} color="white" />
          </ButtonIcon>          
        
        </WrapperQuantityButtons>
       </Content>
      </ProductCard>
    );
  }
  