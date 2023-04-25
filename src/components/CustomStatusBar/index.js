import { StatusBar } from "react-native";
import { useTheme } from 'styled-components';

export default function CustomStatusBar(props) {

  const theme = useTheme()

  return (    
      <StatusBar
        animated={true}
        backgroundColor={theme.COLORS.BACKGROUND_PRIMARY}
        barStyle="light-content"
        showHideTransition="slide"
        hidden={false}
      />
  );
}
