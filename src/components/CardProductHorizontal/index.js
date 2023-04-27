import { useState } from "react";
import {ToastAndroid} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {   
  CardFavoritedProduct,
  ImageProduct,
  Title, 
  InfoProductContainer,  
  StarsContainer,
  TextQuantityReviews,
  TextPrice,
  TextPriceReal,
  TextParcelamento,
  ContainerFavIcon
} from "./styles";

import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
export default function FavoritedProducts() {

  const navigation = useNavigation();
  const [favorite, setFavoriteProduct] = useState(true)

  function handleFavoriteProduct(){
    setFavoriteProduct(!favorite)
    showToast();
  }

  const showToast = () => {
    if(favorite){
      ToastAndroid.showWithGravity(
        'Removido aos favoritos',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
    }else{
      ToastAndroid.showWithGravity(
        'Adicionado aos favoritos',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
    }      
  };

  return (   
      <CardFavoritedProduct onPress={() => navigation.navigate('ProductDetails')}>
        
      <ContainerFavIcon onPress={handleFavoriteProduct}>
            {favorite ?  <AntDesign name="heart" size={24} color="red" /> :  <AntDesign name="hearto" size={24} color="white" />}  
      </ContainerFavIcon>

        <ImageProduct />
        <InfoProductContainer>
          <Title>TÍTULO DO PRODUTO</Title>
          <StarsContainer>
            <FontAwesome name="star" size={12} color="#cfbc15" />  
            <FontAwesome name="star" size={12} color="#cfbc15" />  
            <FontAwesome name="star" size={12} color="#cfbc15" />  
            <FontAwesome name="star" size={12} color="#ccc" />  
            <FontAwesome name="star" size={12} color="#ccc" /> 
            <TextQuantityReviews>4.6 (122)</TextQuantityReviews> 
          </StarsContainer>

          <TextPrice>De: R$ 299,00</TextPrice>
          <TextPriceReal>Por: R$ 199,00</TextPriceReal>
          <TextParcelamento>Ou 10x R$ 20,00</TextParcelamento>

        </InfoProductContainer>
      </CardFavoritedProduct>          
   
  );
}
