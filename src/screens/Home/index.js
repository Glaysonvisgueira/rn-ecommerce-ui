import { useTheme } from 'styled-components';
import { StatusBar } from "react-native";
import { Container, ContainerScroll } from "./styles";
import SwitchButton from "../../components/SwitchThemeButton";
import CarouselProducts from "../../components/CarouselProducts";
import UpToTopButton from "../../components/UpToTopButton";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import DepartamentsCarousel from '../../components/DepartamentsCarousel'
import Footer from '../../components/Footer'

export function Home() {
  const theme = useTheme()

  return (
    <Container>
      <StatusBar
        animated={true}
        backgroundColor={theme.COLORS.BACKGROUND_SECONDARY}
        showHideTransition="slide"
        hidden={false}
      />
      <Header />
      {/* <SwitchButton />     */}
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
        <DepartamentsCarousel />         
        <CarouselProducts title="Promoções" />
        <Banner />
        <CarouselProducts title="Mais procurados" />
        <Banner />
        <CarouselProducts title="Similares" />
        <Banner />
        <CarouselProducts title="Patrocinados" />
        <Banner />
        <Footer />
      </ContainerScroll>
      {/* <UpToTopButton /> */}
    </Container>
  );
}
