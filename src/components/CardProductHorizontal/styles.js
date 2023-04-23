import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};
  position: relative;
  padding: 10px;
`;

export const CardFavoritedProduct = styled.TouchableOpacity`
  width: 100%;
  height: 120px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
  padding: 10px;
  border-radius: 8px;
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ImageProduct = styled.View`
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};  
  border-radius: 4px;
`;

export const Title = styled.Text` 
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: 14px;  
`;

export const InfoProductContainer = styled.View` 
  margin-left: 10px;
  flex: 1;
`;

export const StarsContainer = styled.View`
   flex-direction: row;
   margin-top: 5px
   margin-bottom: 5px;
`
export const TextQuantityReviews = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: 10px; 
  margin-left: 5px;
`

export const TextPrice = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: 10px; 
  text-decoration: line-through;
`;

export const TextPriceReal = styled.Text`
   color: ${({ theme }) => theme.COLORS.BRAND};
   font-family: ${({ theme }) => theme.FONTS.BOLD};
   font-size: 16px;
`
export const TextParcelamento = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: 10px;   
`;

export const ContainerFavIcon = styled.TouchableOpacity`
  position: absolute;
  z-index: 1;
  right: 20px;
  bottom: 20px; 
`
