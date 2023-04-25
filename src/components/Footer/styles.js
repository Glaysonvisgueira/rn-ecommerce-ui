import styled from "styled-components/native";

export const Container = styled.View` 
  width: 100%;
  height: 300px;  
  margin-top: 10px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Text = styled.Text` 
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
`;
