import { 
  Container, 
  ContainerScroll,
  ButtonGoBack,
  Row,
  RowHeaderIcons,
  ButtonIcon,
  ImageProduct,
  ReviewBadge,
  ReviewNote,
  TitleProduct,
  DescriptionProduct,
  WrapperButtons
} from "./styles";
import { useState } from "react";
import {ToastAndroid, Share} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 

import CustomStatusBar from "../../components/CustomStatusBar";
 
export function ProductDetails() {
  const navigation = useNavigation();

  const [favorite, setFavoriteProduct] = useState(false)

    function handleFavoriteProduct(){
        setFavoriteProduct(!favorite)
        showToast();
    }

    const shareProductDetails = async () => {
      try {
        const result = await Share.share({
          message:
            'React Native | A framework for building native apps using React',
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        Alert.alert(error.message);
      }
    };

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
    <Container> 
      <CustomStatusBar />
      <RowHeaderIcons>
        <ButtonGoBack onPress={()=>{navigation.goBack()}}>
          <MaterialIcons name="keyboard-arrow-left" size={38} color="white" />
        </ButtonGoBack>

        <Row>
          <ButtonIcon onPress={handleFavoriteProduct}>            
            {favorite ?  <AntDesign name="heart" size={28} color="red" />:  <AntDesign name="hearto" size={28} color="white" />} 
          </ButtonIcon>
          <ButtonIcon onPress={shareProductDetails}>
            <Entypo name="share" size={28} color="white" />
          </ButtonIcon>
        </Row>
      </RowHeaderIcons>
      
       <ContainerScroll
        contentContainerStyle={{
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
        style={{ 
          width: "100%",           
      }}
        vertical
        showsHorizontalScrollIndicator={false}
      >
        <ImageProduct>
          <ReviewBadge>
            <ReviewNote>
              4.5 (185)
            </ReviewNote>
            <FontAwesome name="star" size={12} color="#cfbc15" />
          </ReviewBadge>
        </ImageProduct>
        <TitleProduct>TÍTULO DO PRODUTO</TitleProduct>
        <DescriptionProduct>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</DescriptionProduct>
      </ContainerScroll>

      <WrapperButtons>

      </WrapperButtons>
           
    </Container>
  );
}
