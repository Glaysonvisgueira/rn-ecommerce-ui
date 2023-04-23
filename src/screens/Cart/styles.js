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