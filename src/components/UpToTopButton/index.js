import { useTheme } from 'styled-components';
import {
  ButtonToTop
} from "./styles";

import { MaterialIcons } from '@expo/vector-icons'; 

export default function UpToTopButton(props) {
  
  const theme = useTheme()
 
  return (    
      <ButtonToTop >
       <MaterialIcons name="keyboard-arrow-up" size={36} color={`${theme.mode == 'light' ? '#fff': '#000'}`} /> 
      </ButtonToTop>
  );
}
