import { useState } from "react";
import {ToastAndroid} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';  
import {
    CardProductContainer,
    TitleProduct,   
    ProductImage,
    Row,
    TextPrice,
    TextPriceReal,
    PricesContainer ,
    PromoFlag,
    TextPercentDesc,
    ContainerFavIcon,
    StarsContainer,
    TextQuantityReviews,
    TextParcelamento
  } from "./styles";
  import { useNavigation } from '@react-navigation/native';
  
  export default function CardProduct(props) {

    const navigation = useNavigation();
    const [favorite, setFavoriteProduct] = useState(false)

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

    function goToDetailsProduct(){
      navigation.navigate('ProductDetails')
    }

    return (    
        <CardProductContainer onPress={goToDetailsProduct}>
          <ContainerFavIcon onPress={handleFavoriteProduct}>
            {favorite ?  <AntDesign name="heart" size={24} color="red" />:  <AntDesign name="hearto" size={24} color="white" />}  
          </ContainerFavIcon>

          {props.percentDescount && 
            <PromoFlag>
              <TextPercentDesc>-{props.percentDescount}%</TextPercentDesc>
            </PromoFlag>
          }
               
          <ProductImage />
          <TitleProduct >
            {props.title}
          </TitleProduct>    

          <StarsContainer>
            <FontAwesome name="star" size={12} color="#cfbc15" />  
            <FontAwesome name="star" size={12} color="#cfbc15" />  
            <FontAwesome name="star" size={12} color="#cfbc15" />  
            <FontAwesome name="star" size={12} color="#ccc" />  
            <FontAwesome name="star" size={12} color="#ccc" /> 
            <TextQuantityReviews>{props.mediaReview} ({props.quantityReviews})</TextQuantityReviews> 
          </StarsContainer>  

        <PricesContainer>          
          <TextPrice>De: R$ {props.valorDe}</TextPrice>
          <TextPriceReal>Por: R$ {props.valorPor}</TextPriceReal>
          <TextParcelamento>Ou 10x R$ 20,00</TextParcelamento>
          </PricesContainer>
        </CardProductContainer>       
    );
  }
  