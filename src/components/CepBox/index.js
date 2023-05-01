import { useTheme } from "styled-components";

//Ícones
import { FontAwesome } from "@expo/vector-icons";

import {
  Container,
  Input,
  Row,
  TitleInput,
  MessageFrete,
  RowMessageFrete,
  ContainerText,
  TextPrazo,
  ContainerIconAndText,
  TextPrazoAlert,
  TextFreteGratis,
} from "./styles";

export default function CepBox(props) {
  const theme = useTheme();

  return (
    <Container>
      <TitleInput>Calcular frete</TitleInput>
      <Row>
        <Input
          autoCapitalize="words"
          autoComplete="off"
          autoCorrect
          placeholder="CEP"
        />
      </Row>

      <MessageFrete>
        <RowMessageFrete>
          <ContainerIconAndText>
            <FontAwesome name="truck" size={24} color="gray" />
            <ContainerText>
              <TextPrazo>Receba em até 2 dias úteis</TextPrazo>
              <TextPrazoAlert>Após o pagamento confirmado</TextPrazoAlert>
            </ContainerText>
          </ContainerIconAndText>

          <TextFreteGratis>Frete Grátis</TextFreteGratis>
        </RowMessageFrete>

        <RowMessageFrete>
          <ContainerIconAndText>
            <FontAwesome name="clock-o" size={26} color="gray" />
            <ContainerText>
              <TextPrazo>Retire na loja em até duas horas</TextPrazo>
              <TextPrazoAlert>
                verifique o horário de funcionamento da loja
              </TextPrazoAlert>
            </ContainerText>
          </ContainerIconAndText>

          <TextFreteGratis>Frete Grátis</TextFreteGratis>
        </RowMessageFrete>
      </MessageFrete>
    </Container>
  );
}
