import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  margin-top: 5px;
`;

export const CarouselCardItemView = styled.View`
  width: ${(props) => props.width}px;
  height: 200px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.COLORS.BRAND};
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
  justify-content: center;
  align-items: center;
`;

export const ContainerDots = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
`;

export const Dot = styled.View`
  width: 12px;
  height: 3px;
  border-radius: 4px;
  margin-left: 2px;
  margin-right: 2px;
  background-color: ${(props) => props.bgColor};
`;

export const ContentTextBanner = styled.Text`
  color: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: 14px;
`;
