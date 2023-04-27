import styled from "styled-components/native";

export const AccordionHeader = styled.TouchableOpacity`  
  height: 40px;
  width: 100%;
  align-items: center;
  justify-content: center; 
  position: relative;
  margin-top: 10px;
  // margin-bottom: 10px;
  padding: 5px 15px;
  border-color: ${({ theme }) => theme.COLORS.BRAND}; 
  border-top-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const ContentAccordionText = styled.Text`  
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY}; 
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const TitleAccordion = styled.Text`  
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY}; 
    font-family: ${({ theme }) => theme.FONTS.BOLD}; 
    font-size: 14px;
`;

export const ContentAccordionView = styled.View`  
  border-color: ${({ theme }) => theme.COLORS.BRAND}; 
  border-top-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  width: 100%;
  padding: 10px;
`;


