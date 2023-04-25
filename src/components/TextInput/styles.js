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
  width: 100%;
  height: 38px;
  background-color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
  border: none;
  margin-right: 10px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
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
`;
