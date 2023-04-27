import { 
  Container, 
  ContainerScroll
} from "./styles";
import CardProductHorizontal from '../../components/CardProductHorizontal'

export function FavoritedProducts() {
  return (
    <Container>  
      <ContainerScroll
         contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        style={{ 
          width: "100%",           
      }}
        vertical
        showsVerticalScrollIndicator={false}
      >
        <CardProductHorizontal/>
        <CardProductHorizontal />
        <CardProductHorizontal />
        <CardProductHorizontal />
        <CardProductHorizontal />
        <CardProductHorizontal />
        <CardProductHorizontal />
        <CardProductHorizontal />
        <CardProductHorizontal />
        <CardProductHorizontal />
        <CardProductHorizontal />      
      </ContainerScroll>
         
    </Container>
  );
}
