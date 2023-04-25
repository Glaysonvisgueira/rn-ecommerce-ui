import { useTheme } from 'styled-components';

import { TouchableOpacity } from 'react-native';

//Ícones
import { FontAwesome } from '@expo/vector-icons'; 

import {
    Container,
    Input,
    Row,
    TitleInput
} from "./styles";
  
export default function Header(props) {

    const theme = useTheme()

    return (    
        <Container>
            <TitleInput>{props.titleInput}</TitleInput>
            <Row>
                <Input 
                    autoCapitalize="words"
                    autoComplete="off"
                    autoCorrect
                    placeholder={props.placeholder}
                /> 
                <TouchableOpacity>
                    <FontAwesome name="search" size={34} color={`${theme.mode == 'light' ? '#000': '#fff'}`} />
                </TouchableOpacity>
            </Row>
        </Container>       
    );
  }
  