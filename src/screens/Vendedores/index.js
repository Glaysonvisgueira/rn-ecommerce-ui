import {
  Container,
  ContainerScroll,
  RowVendedor,
  NameVendedor,
  ImageVendedor,
  WrapperNameImage,
  WrapperIcons,
  IconButton,
} from "./styles";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export function Vendedores(props) {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <Container>
      <ContainerScroll
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "flex-start",
        }}
        style={{
          width: "100%",
        }}
        vertical
        showsVerticalScrollIndicator={false}
      >
        <RowVendedor>
          <WrapperNameImage>
            <ImageVendedor />
            <NameVendedor>NOME DO VENDEDOR</NameVendedor>
          </WrapperNameImage>
          <WrapperIcons>
            <IconButton>
              <FontAwesome name="whatsapp" size={32} color="#25D366" />
            </IconButton>
            <IconButton>
              <FontAwesome5 name="telegram-plane" size={32} color="#0088cc" />
            </IconButton>
          </WrapperIcons>
        </RowVendedor>
      </ContainerScroll>
    </Container>
  );
}
