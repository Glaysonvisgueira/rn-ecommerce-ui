import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
  padding: 20px 10px;
  border-radius: 8px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 38px;
  background-color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
  border: none;
  margin-right: 10px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  border-width: 1px;
  border-color: #ccc;
`;

export const ButtonSearch = styled.TouchableOpacity`
  width: 44px;
  height: 38px;
  background-color: ${({ theme }) => theme.COLORS.BRAND};
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

export const TitleInput = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  margin-bottom: 10px;
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
`;

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
  justify-content: center;
  align-items: center;
`;

export const MessageFrete = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const RowMessageFrete = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const ContainerText = styled.View`
  justify-content: center;
  align-items: flex-start;
  margin-left: 15px;
`;

export const TextPrazo = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
`;

export const TextPrazoAlert = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: 10px;
  margin-top: 5px;
  color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
`;

export const TextFreteGratis = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: 12px;
  color: #259409;
`;

export const ContainerIconAndText = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
