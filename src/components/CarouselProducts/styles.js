import styled from "styled-components/native";

export const HorizontalScrollView = styled.ScrollView`
  flexGrow: 0;
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const TitleCarousel = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: 16px;
`;

export const WrapperVejaMais = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TextVejaMais = styled.Text`
  color: ${({ theme }) => theme.COLORS.BRAND};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 0px 15px;
  justify-content: space-between;
  align-items: center;
`;
