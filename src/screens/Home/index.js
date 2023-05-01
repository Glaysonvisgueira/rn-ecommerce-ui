import { useTheme } from "styled-components";
import { StatusBar } from "react-native";
import { Container, ContainerScroll } from "./styles";
import SwitchButton from "../../components/SwitchThemeButton";
import CarouselProducts from "../../components/CarouselProducts";
import UpToTopButton from "../../components/UpToTopButton";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import DepartamentsCarousel from "../../components/DepartamentsCarousel";
import Footer from "../../components/Footer";
import CustomStatusBar from "../../components/CustomStatusBar";
import CarouselBanners from "../../components/CarouselBanners";

export function Home() {
  const theme = useTheme();

  return (
    <Container>
      <CustomStatusBar />
      <Header />
      {/* <SwitchButton />     */}
      <ContainerScroll
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
        style={{
          width: "100%",
        }}
        vertical
        showsVerticalScrollIndicator={false}
      >
        <DepartamentsCarousel />

        <CarouselBanners />

        <CarouselProducts title="Promoções" />
        <Banner />
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
