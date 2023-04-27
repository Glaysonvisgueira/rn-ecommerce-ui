import {
  Container,
  Logo,
  SocialMediaContainerButtons,
  TitleSectionFooter,
  OptionFooter,
} from "./styles";

import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Footer(props) {
  const navigation = useNavigation();

  return (
    <Container>
      {/* <Logo />
          <SocialMediaContainerButtons></SocialMediaContainerButtons> */}

      <TitleSectionFooter>FOOTER</TitleSectionFooter>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("NossasLojas");
        }}
      >
        <OptionFooter>Nossas lojas</OptionFooter>
      </TouchableOpacity>
    </Container>
  );
}
