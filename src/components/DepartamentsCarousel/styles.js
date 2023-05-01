import styled from "styled-components/native";

export const Container = styled.ScrollView`
  position: relative;
  flexgrow: 0;
  width: 100%;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const DepartamentSection = styled.TouchableOpacity`
  margin: 5px;
  align-items: center;
  justify-content: center;
  min-width: 70px;
`;

export const ImageSection = styled.View`
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.allDepartaments
      ? ({ theme }) => theme.COLORS.BRAND
      : ({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
  border-radius: 100px;
`;

export const TitleSection = styled.Text`
  color: ${({ theme }) => theme.COLORS.BRAND};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: 12px;
  margin-top: 5px;
`;
