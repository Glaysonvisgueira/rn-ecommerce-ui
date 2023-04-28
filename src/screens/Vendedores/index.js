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
import { Linking } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import CustomStatusBar from "../../components/CustomStatusBar";

function RowVendedorComponent() {
  //Função para enviar mensagem pré-definida via Whatsapp
  const mensagem = "Olá vendedor! estou interessado em seus produtos.";

  function sendWhatsappToVendedor() {
    Linking.openURL(`whatsapp://send?phone=55086999277101&text=${mensagem}`);
  }

  // function sendTelegramToVendedor() {
  //   Linking.openURL(`telegram.me/glaysonvisgueira`);
  // }

  return (
    <RowVendedor>
      <WrapperNameImage>
        <ImageVendedor />
        <NameVendedor>NOME DO VENDEDOR</NameVendedor>
      </WrapperNameImage>
      <WrapperIcons>
        <IconButton onPress={sendWhatsappToVendedor}>
          <FontAwesome name="whatsapp" size={32} color="#25D366" />
        </IconButton>
        {/* <IconButton onPress={sendTelegramToVendedor}>
          <FontAwesome5 name="telegram-plane" size={32} color="#0088cc" />
        </IconButton> */}
      </WrapperIcons>
    </RowVendedor>
  );
}

export function Vendedores(props) {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <>
      <CustomStatusBar />
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
          <RowVendedorComponent />
          <RowVendedorComponent />
          <RowVendedorComponent />
          <RowVendedorComponent />
          <RowVendedorComponent />
          <RowVendedorComponent />
          <RowVendedorComponent />
          <RowVendedorComponent />
          <RowVendedorComponent />
          <RowVendedorComponent />
          <RowVendedorComponent />
          <RowVendedorComponent />
          <RowVendedorComponent />
          <RowVendedorComponent />
          <RowVendedorComponent />
          <RowVendedorComponent />
        </ContainerScroll>
      </Container>
    </>
  );
}
