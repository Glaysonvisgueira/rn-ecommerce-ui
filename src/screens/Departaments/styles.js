import styled from "styled-components/native";
import { StatusBar } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};
  position: relative;
  // padding: 10px;
  border-top-color: ${({ theme }) => theme.COLORS.BRAND};
  border-top-width: 4px;
`;

export const ContainerScroll = styled.ScrollView`
   flexGrow: 0;
`;

export const Row = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  // background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
  padding: 10px 20px;  
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
  border-bottom-width: 1px;
`;

export const TitleDepartaments = styled.Text`  
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  margin: 20px 0px;
  padding: 10px 20px;
  color: ${({ theme }) => theme.COLORS.BRAND};
  width: 100%;
`;

export const Category = styled.Text`  
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  margin-left: 10px;
  
`;