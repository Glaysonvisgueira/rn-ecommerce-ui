import styled from "styled-components/native";

export const ProductCard = styled.View`  
  width: 100%;
  height: 150px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
  flex-direction: row;
  padding: 10px;
  border-radius: 8px;
`;
  
export const ImageProduct = styled.View`  
    width: 130px;
    height: 130px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};
`;

export const Content = styled.View`  
    width: 100%;
    margin-left: 10px;
`;

export const ButtonIcon = styled.TouchableOpacity`  
    width: 28px;
    height: 28px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};
    border-radius: 100px;
`;

export const TitleProduct = styled.Text`  
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: 14px; 
`;

export const Quantity = styled.Text`  
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: 14px; 
  width: 40px;
  text-align: center;
`;

export const WrapperQuantityButtons = styled.View`  
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
