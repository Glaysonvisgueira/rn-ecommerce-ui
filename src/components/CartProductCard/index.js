import {
  ProductCard,
  ImageProduct,
  Content,
  TitleProduct,
  WrapperQuantityButtons,
  ButtonIcon,
  Quantity,
  TrashIcon,
  Price,
  ContainerSpaceBetween,
} from "./styles";
import { useState } from "react";
import { Alert, ToastAndroid } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function CartProductCard(props) {
  const [quantityProduct, setQuantityProduct] = useState(1);

  function increaseProductQuantity() {
    setQuantityProduct((prev) => prev + 1);
  }

  function decreaseProductQuantity() {
    if (quantityProduct < 2) {
      deleteProductFromCart();
    } else {
      setQuantityProduct((prev) => prev - 1);
    }
  }

  const showToastRemoveProduct = () => {
    ToastAndroid.showWithGravity(
      "Produto removido do carrinho",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
  };

  function deleteProductFromCart() {
    Alert.alert(
      "",
      "Deseja realmente remover o produto do seu carrinho de compras?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancelar Pressionado"),
          style: "cancel",
        },
        {
          text: "remover",
          onPress: () => {
            showToastRemoveProduct();
          },
        },
      ]
    );
  }

  return (
    <ProductCard>
      <ImageProduct />
      <Content>
        <TitleProduct>PRODUTO</TitleProduct>

        <Price>R$ 199,00</Price>

        <ContainerSpaceBetween>
          <WrapperQuantityButtons>
            <ButtonIcon onPress={decreaseProductQuantity}>
              <FontAwesome5 name="minus" size={14} color="white" />
            </ButtonIcon>

            <Quantity>{quantityProduct}</Quantity>

            <ButtonIcon onPress={increaseProductQuantity}>
              <FontAwesome5 name="plus" size={14} color="white" />
            </ButtonIcon>
          </WrapperQuantityButtons>

          <TrashIcon onPress={showToastRemoveProduct}>
            <FontAwesome name="trash-o" size={18} color="#c91212" />
          </TrashIcon>
        </ContainerSpaceBetween>
      </Content>
    </ProductCard>
  );
}
