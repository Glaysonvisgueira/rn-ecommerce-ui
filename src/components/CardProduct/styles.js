import styled from "styled-components/native";


export const CardProductContainer = styled.TouchableOpacity`
  width: 170px;
  height: 240px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
  border-radius: 8px;
  margin: 0 5px;
  border: none;
  padding: 10px;
  position: relative;
`;

export const TitleProduct = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  font-size: 12px;
  margin-top: 5px;
`;

export const ProductImage = styled.View`
  width: 100%;
  height: 120px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};
  border-radius: 4px;
`;

export const Row = styled.View`
   flex-direction: row;
`

export const PricesContainer = styled.View`
   margin-top: 10px;
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

export const PromoFlag = styled.View`   
   position: absolute;
   z-index: 1;
   right: 0;
   top: 0;
   background-color: #dec909;
   padding: 5px 10px;
   border-bottom-left-radius: 18px;
   border-top-right-radius: 8px;
  `

export const TextPercentDesc = styled.Text`
   color: #000;
   font-family: ${({ theme }) => theme.FONTS.BOLD};
   font-size: 12px;
`

export const ContainerFavIcon = styled.TouchableOpacity`
  position: absolute;
  z-index: 1;
  left: 20px;
  top: 20px; 
`

export const StarsContainer = styled.View`
   flex-direction: row;
   margin-top: 5px
`