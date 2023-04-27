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
  flexgrow: 0;
`;

export const RowVendedor = styled.View`
  width: 100%;
  flex-direction: row;
  height: 64px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
  padding: 10px;
  border-radius: 4px;
`;

export const ImageVendedor = styled.View`
  width: 48px;
  height: 48px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};
`;

export const NameVendedor = styled.Text`
  margin-left: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
`;

export const WrapperNameImage = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const WrapperIcons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const IconButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;
