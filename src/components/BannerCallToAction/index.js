import { Container, BannerImage, TextBanner } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function BannerCallToAction(props) {
  const navigation = useNavigation();

  return (
    <Container>
      <BannerImage
        onPress={() => navigation.navigate("BannerContent")}
        activeOpacity={1}
      ></BannerImage>
    </Container>
  );
}
