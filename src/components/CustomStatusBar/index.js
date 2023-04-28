import { StatusBar } from "react-native";
import { useTheme } from "styled-components";

export default function CustomStatusBar(props) {
  const theme = useTheme();

  return (
    <StatusBar
      animated={true}
      backgroundColor={
        props.bgColor == "black"
          ? theme.COLORS.BACKGROUND_PRIMARY
          : theme.COLORS.BRAND
      }
      barStyle={theme.mode == "light" ? "light-content" : "dark-content"}
      showHideTransition="slide"
      hidden={false}
    />
  );
}
