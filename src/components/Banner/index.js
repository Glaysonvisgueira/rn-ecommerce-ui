import { Container, BannerImage, TextBanner } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Banner(props) {
  const navigation = useNavigation();

  return (
    <Container>
      <BannerImage
        onPress={() => navigation.navigate("BannerContent")}
        activeOpacity={1}
      >
        <TextBanner>Texto/imagem do banner</TextBanner>
      </BannerImage>
    </Container>
  );
}
