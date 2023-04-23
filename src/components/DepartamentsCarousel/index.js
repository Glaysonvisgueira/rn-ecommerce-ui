import { Container, DepartamentSection, ImageSection, TitleSection } from "./styles";
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';  

export default function DepartamentsCarousel() {
    const navigation = useNavigation();
    const theme = useTheme()
    function goToDepartamentScreen(){
        navigation.navigate('Departaments')
      }

    return (
    <Container  
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        endFillColor="#000"
    > 
        <DepartamentSection onPress={goToDepartamentScreen}>  
            <ImageSection>
                <MaterialIcons name="smartphone" size={24} color={theme.COLORS.BRAND} />
            </ImageSection>
            <TitleSection>Celulares</TitleSection>
        </DepartamentSection>

        <DepartamentSection onPress={goToDepartamentScreen}>  
            <ImageSection>
                <MaterialIcons name="kitchen" size={24} color={theme.COLORS.BRAND} />
            </ImageSection>
            <TitleSection>Refrigeradores</TitleSection>
        </DepartamentSection>

        <DepartamentSection onPress={goToDepartamentScreen}>  
            <ImageSection>
                <MaterialCommunityIcons name="file-cabinet" size={24} color={theme.COLORS.BRAND} />
            </ImageSection>
            <TitleSection>Armários</TitleSection>
        </DepartamentSection>

        <DepartamentSection onPress={goToDepartamentScreen}>              
            <ImageSection>
            <FontAwesome5 name="snowflake" size={24} color={theme.COLORS.BRAND} />
            </ImageSection>            
            <TitleSection>Freezers</TitleSection>
        </DepartamentSection>  

        <DepartamentSection onPress={goToDepartamentScreen}>  
            <ImageSection>
                <FontAwesome5 name="fan" size={24} color={theme.COLORS.BRAND} />
            </ImageSection>
            <TitleSection>Ventiladores</TitleSection>
        </DepartamentSection>

        <DepartamentSection onPress={goToDepartamentScreen}>  
            <ImageSection>
                <FontAwesome name="bicycle" size={24} color={theme.COLORS.BRAND} />
            </ImageSection>
            <TitleSection>Bicicletas</TitleSection>
        </DepartamentSection>

        <DepartamentSection onPress={goToDepartamentScreen}>  
            <ImageSection>
                <FontAwesome name="tv" size={24} color={theme.COLORS.BRAND} />
            </ImageSection>
            <TitleSection>Televisores</TitleSection>
        </DepartamentSection>

        <DepartamentSection onPress={goToDepartamentScreen}>  
            <ImageSection >
                <FontAwesome5 name="tools" size={24} color={theme.COLORS.BRAND} />
            </ImageSection>
            <TitleSection>Ferramentas</TitleSection>
        </DepartamentSection>

        <DepartamentSection  onPress={goToDepartamentScreen}>  
            <ImageSection allDepartaments={true}>
                <FontAwesome name="plus" size={24} color={`${theme.mode == 'light' ? '#fff': '#000'}`} />
            </ImageSection>
            <TitleSection>Mais</TitleSection>
        </DepartamentSection>

    </Container>
  );
}
