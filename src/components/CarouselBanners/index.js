import {
  Container,
  ContainerDots,
  Dot,
  CarouselCardItemView,
  ContentTextBanner,
} from "./styles";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { Dimensions, FlatList, Image, View, StyleSheet } from "react-native";
import { useState } from "react";

const SLIDER_WIDTH = Dimensions.get("window").width;

const carouselItems = [
  {
    id: 1,
    imgUrl: "https://m.media-amazon.com/images/I/71j6tLRXkKL._AC_SY240_.jpg",
  },
  {
    id: 2,
    imgUrl: "https://m.media-amazon.com/images/I/61jX4QftIRL._AC_SY240_.jpg",
  },
  {
    id: 3,
    imgUrl: "https://m.media-amazon.com/images/I/71j6tLRXkKL._AC_SY240_.jpg",
  },
  {
    id: 4,
    imgUrl: "https://m.media-amazon.com/images/I/61jX4QftIRL._AC_SY240_.jpg",
  },
  {
    id: 5,
    imgUrl: "https://m.media-amazon.com/images/I/61jX4QftIRL._AC_SY240_.jpg",
  },
  {
    id: 6,
    imgUrl: "https://m.media-amazon.com/images/I/61jX4QftIRL._AC_SY240_.jpg",
  },
];

export default function CarouselBanners(props) {
  const theme = useTheme();
  const navigation = useNavigation();

  const [activeIndex, setActiveIndex] = useState(0);

  const CarouselCardItem = ({ item }) => {
    return (
      <CarouselCardItemView
        key={item.id}
        width={SLIDER_WIDTH}
        onPress={() => {
          navigation.navigate("BannerContent");
        }}
        activeOpacity={1}
      >
        <ContentTextBanner>
          CONTEÚDO DO BANNER NR: {activeIndex + 1}
        </ContentTextBanner>
      </CarouselCardItemView>
    );
  };

  return (
    <Container>
      <FlatList
        data={carouselItems}
        style={{
          width: "100%",
          height: "auto",
        }}
        pagingEnabled
        horizontal
        scrollEventThrottle={16}
        onMomentumScrollEnd={(event) => {
          setActiveIndex(
            Math.round(event.nativeEvent.contentOffset.x / SLIDER_WIDTH)
          );
        }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => String(item?.id)}
        renderItem={({ item }) => <CarouselCardItem item={item} />}
      />
      {carouselItems.length > 1 ? (
        <ContainerDots>
          {carouselItems.map((_, i) => (
            <Dot
              key={i}
              bgColor={i == activeIndex ? theme.COLORS.BRAND : "#a8a8a8"}
            />
          ))}
        </ContainerDots>
      ) : null}
    </Container>
  );
}
