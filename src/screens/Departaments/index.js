import { useTheme } from 'styled-components';
import {
  Container,
  ContainerScroll,
  Row,
  Category,
  TitleDepartaments
} from "./styles";
import { MaterialIcons } from '@expo/vector-icons'; 

const DEPARTAMENTS = ['Tv e Vídeo', 'Geladeiras', 'Celulares', 'Ventiladores', 'Secadores', 'Freezers', 'Cozinhas', 'Guarda-roupas', 'Tv e Vídeo', 'Geladeiras', 'Celulares', 'Ventiladores', 'Secadores', 'Freezers', 'Cozinhas', 'Guarda-roupas', 'Tv e Vídeo', 'Geladeiras', 'Celulares', 'Ventiladores', 'Secadores', 'Freezers', 'Cozinhas', 'Guarda-roupas']

export function Departaments() {

  const theme = useTheme()

  return (
    <Container> 
      <TitleDepartaments>Procure por departamentos</TitleDepartaments>
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

        {DEPARTAMENTS.map((item, index)=>(
          <Row key={index}>
            <MaterialIcons name="smartphone" size={24} color={theme.COLORS.BRAND} />
            <Category>{item}</Category>
         </Row>
        ))}
       
      </ContainerScroll>  
    </Container>
  );
}
