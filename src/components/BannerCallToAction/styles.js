import styled from "styled-components/native";

export const Container = styled.View`
  height: 190px;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 10px;
  margin-bottom: 5px;
  padding: 5px 15px;
`;

export const BannerImage = styled.TouchableOpacity`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BRAND};
  border-radius: 18px;
  align-items: center;
  justify-content: center;
`;

export const TextBanner = styled.Text`
  color: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: 16px;
`;
