import {
  Container,
  Logo,
  SocialMediaContainerButtons,
  TitleSectionFooter,
  OptionFooter,
} from "./styles";

import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SwitchButton from "../SwitchThemeButton";

export default function Footer(props) {
  const navigation = useNavigation();

  return (
    <Container>
      {/* <Logo />
          <SocialMediaContainerButtons></SocialMediaContainerButtons> */}

      <SwitchButton />

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
