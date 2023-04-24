import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};
  position: relative;
  padding: 10px;
  border-top-color: ${({ theme }) => theme.COLORS.BRAND};
  border-top-width: 4px;
`;

export const ContainerScroll = styled.ScrollView`
   flexGrow: 0;
`;

export const ButtonGoShopping = styled.TouchableOpacity`  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
  width: 100%;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 10px;
  border-color: ${({ theme }) => theme.COLORS.BRAND};
  border-width: 2Px;
`;

export const TextGoShopping = styled.Text`  
  color: ${({ theme }) => theme.COLORS.BRAND};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: 16px; 
`;

export const ButtonGoCheckout = styled.TouchableOpacity`  
  background-color: ${({ theme }) => theme.COLORS.BRAND};
  width: 100%;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 30px;
  
`;

export const TextGoCheckout = styled.Text`  
  color: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: 16px; 
`;