import { useTheme } from 'styled-components';

import { TouchableOpacity } from 'react-native';

//Ícones
import { FontAwesome } from '@expo/vector-icons'; 

import {
    Container,
    RowSearchBar,
    InputSearch,
    RowCepContainer,
    TextCep
} from "./styles";
  
export default function Header(props) {

    const theme = useTheme()

    return (    
        <Container>
        <RowSearchBar>
             <InputSearch 
                autoCapitalize="words"
                autoComplete="off"
                autoCorrect
                placeholder="Procure por produto ou departamento"
             /> 
             <TouchableOpacity>
                <FontAwesome name="search" size={34} color={`${theme.mode == 'light' ? '#000': '#fff'}`} />
             </TouchableOpacity>
         </RowSearchBar>

         {/* <RowCepContainer>
            <TouchableOpacity>
                <TextCep>
                    Insira seu cep
                </TextCep>  
            </TouchableOpacity>         
         </RowCepContainer> */}
        </Container>       
    );
  }
  