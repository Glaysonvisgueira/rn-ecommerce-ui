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

export const RowHeaderIcons = styled.View`
  flex-direction: row;
  width: 100%;
  height: 54px;
  //background-color: ${({ theme }) => theme.COLORS.BRAND};
  align-items: center;
  justify-content: space-between;
 
`;

export const Row = styled.View`   
  align-items: center;
  justify-content: center; 
  flex-direction: row;
`;

export const ImageProduct = styled.View`  
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};  
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
`;

export const ButtonGoBack = styled.TouchableOpacity`
  width: 38px;
  height: 38px;
  background-color: ${({ theme }) => theme.COLORS.BRAND};
  align-items: center;
  justify-content: center;
  border-radius: 100px;
`;

export const ButtonIcon = styled.TouchableOpacity`
  width: 38px;
  height: 38px;  
  align-items: center;
  justify-content: center;
`;
