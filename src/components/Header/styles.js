import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.COLORS.BRAND};
  padding: 20px 10px;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};
  border-bottom-width: 2px;
`;

export const InputSearch = styled.TextInput`
  width: 100%;
  height: 38px;
  background-color: #fff;
  padding: 5px 10px;
  border-radius: 50px;
  margin-right: 10px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
`;

export const RowSearchBar = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
`;

export const RowCepContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const TextCep = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: 12px;
  margin-top: 5px;
`;
