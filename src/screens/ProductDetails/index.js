import { 
  Container, 
  ContainerScroll,
  ButtonGoBack,
  Row,
  RowHeaderIcons,
  ButtonIcon,
  ImageProduct
} from "./styles";

import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import CustomStatusBar from "../../components/CustomStatusBar";
 
export function ProductDetails() {
  const navigation = useNavigation();

  return (
    <Container> 
      <CustomStatusBar />
      <RowHeaderIcons>
        <ButtonGoBack onPress={()=>{navigation.goBack()}}>
          <MaterialIcons name="keyboard-arrow-left" size={28} color="black" />
        </ButtonGoBack>

        <Row>
          <ButtonIcon>
            <AntDesign name="hearto" size={28} color="white" />
          </ButtonIcon>
          <ButtonIcon>
            <Entypo name="share" size={28} color="white" />
          </ButtonIcon>
        </Row>
      </RowHeaderIcons>
      
       <ContainerScroll
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        style={{ 
          width: "100%",           
      }}
        vertical
        showsHorizontalScrollIndicator={false}
      >
        <ImageProduct />
        
      </ContainerScroll>
           
    </Container>
  );
}
