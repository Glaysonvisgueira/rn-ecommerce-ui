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
  text-align: left;
  width: 100%;
  margin-left: 35px;
  margin-top: 10px;
`;
