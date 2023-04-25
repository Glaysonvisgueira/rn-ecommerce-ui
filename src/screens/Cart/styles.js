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
  border-width: 2px;
`;

export const TextGoShopping = styled.Text`  
  color: ${({ theme }) => theme.COLORS.BRAND};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: 14px; 
`;

export const ButtonGoCheckout = styled.TouchableOpacity`  
  background-color: ${({ theme }) => theme.COLORS.BRAND};
  width: 100%;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const TextGoCheckout = styled.Text`  
  color: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: 14px; 
`;

export const WrapperButtons = styled.View`  
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const WrapperTotalCart = styled.View`  
  width: 100%;
  margin-top: 5px;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
  padding: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 8px;
`;

export const TextTotal = styled.Text`  
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: 12px; 
`;

export const TextTotalPrice = styled.Text`  
  color: ${({ theme }) => theme.COLORS.BRAND};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: 16px; 
`;

export const RowSpaceBetween = styled.View`  
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Divider = styled.View`  
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
  border-top-color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  border-top-width: 1px;
`;

export const RowTitle = styled.View`  
  flex-direction: row;
  justify-content: flex-start;
  align-items: center; 
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const TitlePage = styled.Text`  
  color: ${({ theme }) => theme.COLORS.BRAND};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: 16px; 
  margin-left: 15px;
`;

