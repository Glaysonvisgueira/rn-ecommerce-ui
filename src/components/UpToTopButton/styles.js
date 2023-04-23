import styled from "styled-components/native";


export const ButtonToTop = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.COLORS.BRAND};
  border-radius: 50px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  align-items: center;
  justify-content: center;
  z-index: 10;
  border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};
`;