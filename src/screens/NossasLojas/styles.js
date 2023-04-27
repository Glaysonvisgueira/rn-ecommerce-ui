import styled from "styled-components/native";

export const TooltipMaker = styled.View`
  width: 200px;
  height: auto;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
  position: relative;
  padding: 10px;
  border-radius: 8px;
  border-color: #000;
  border-width: 1px;
`;

export const WrapperButtons = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const ButtonGoToVendedores = styled.TouchableOpacity`
  width: 48%;
  height: 30px;
  background-color: ${({ theme }) => theme.COLORS.BRAND};
  align-items: center;
  justify-content: center;
`;

export const ButtonGoToLocation = styled.TouchableOpacity`
  width: 48%;
  height: 30px;
  background-color: ${({ theme }) => theme.COLORS.BRAND};
  align-items: center;
  justify-content: center;
`;

export const TitleLoja = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: 14px;
`;

export const TextAdress = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const TextFuncionamento = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: 10px;
  margin-left: 5px;
`;

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
`;

export const MessageVendedores = styled.Text`
  color: ${({ theme }) => theme.COLORS.BRAND};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: 10px;
  margin-top: 15px;
`;
