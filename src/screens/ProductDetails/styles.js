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

export const ReviewBadge = styled.View`
  flex-direction: row;    
  padding: 2px 10px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10px;
  right: 10px
  border-radius: 100px;
  // border-width: 1px;
  // border-color: ${({ theme }) => theme.COLORS.BRAND};
`;

export const ReviewNote = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  margin-right: 5px;
  font-size: 10px;
`;

export const TitleProduct = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px;
`;

export const DescriptionProduct = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 12px;
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
  position: relative;
`;

export const ButtonGoBack = styled.TouchableOpacity`
  width: 38px;
  height: 38px;
  //background-color: ${({ theme }) => theme.COLORS.BRAND};
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

export const WrapperButtons = styled.View`
  width: 100%;
  height: 150px;  
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
  // border-top-color: ${({ theme }) => theme.COLORS.BRAND};
  // border-top-width: 4px;
  margin-top: 20px;
`;

