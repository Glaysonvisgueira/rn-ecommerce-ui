import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  //height: 300px;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
`;

export const Logo = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};
  height: 100px;
  width: 200px;
  border-radius: 8px;
`;

export const SocialMediaContainerButtons = styled.View` 
  width: 100%
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};
  height: 40px;
  border-radius: 8px
  margin-top: 10px;
  flex-direction: row;
`;

export const TitleSectionFooter = styled.Text`
  color: ${({ theme }) => theme.COLORS.BRAND};
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
`;

export const OptionFooter = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
  margin-top: 5px;
  margin-bottom: 5px;
`;
