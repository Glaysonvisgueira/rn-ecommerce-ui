import {
  HorizontalScrollView,
  TitleCarousel,
  Row,
  TextVejaMais,
  WrapperVejaMais
} from "./styles";
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import CardProduct from "../CardProduct";

import { Entypo } from '@expo/vector-icons';

export default function CarouselProducts(props) {

  const theme = useTheme()
  const navigation = useNavigation();

  return (
    <>   
      <Row>
        <TitleCarousel>{props.title}</TitleCarousel>

        <WrapperVejaMais>
          <TextVejaMais onPress={() => { navigation.navigate('CategoriesProducts')}}>
            Veja mais
          </TextVejaMais>
        <Entypo name="chevron-right" size={18} color={theme.COLORS.BRAND} />
        </WrapperVejaMais>
      </Row>
    <HorizontalScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      endFillColor="#000"
      contentContainerStyle={{paddingHorizontal: 10}}
    >     
      <CardProduct percentDescount="20" valorDe="249,00" valorPor="199,99" title="VENTILADOR" quantityReviews="54" mediaReview="4.0" />
      <CardProduct percentDescount="5" valorDe="580,00" valorPor="499,99" title="PANELA ELÉTRICA" quantityReviews="134" mediaReview="4.5"/>
      <CardProduct percentDescount="10" valorDe="249,00" valorPor="219,99" title="MICROONDAS" quantityReviews="324" mediaReview="3.0"/>
      <CardProduct percentDescount="15" valorDe="349,00" valorPor="199,99" title="CHAPA ELÉTRICA" quantityReviews="556" mediaReview="3.0"/>
    </HorizontalScrollView>
    </>
  );
}
