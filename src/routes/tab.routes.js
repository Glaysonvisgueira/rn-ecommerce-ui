import { useTheme } from "styled-components";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens TABS
import { Home } from "../screens/Home";
import { FavoritedProducts } from "../screens/FavoritedProducts";
import { Departaments } from "../screens/Departaments";
import { Cart } from "../screens/Cart";

//Screens STACKS
import { ProductDetails } from "../screens/ProductDetails";
import { BannerContent } from "../screens/BannerContent";
import { CategoriesProducts } from "../screens/CategoriesProducts";
import { Vendedores } from "../screens/Vendedores";
import { NossasLojas } from "../screens/NossasLojas";

const { Screen, Navigator } = createBottomTabNavigator();
const { Screen: ScreenStack, Navigator: NavigatorStack } =
  createNativeStackNavigator();

import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export function TabRoutes() {
  const theme = useTheme();

  function HomeScreen() {
    return (
      <Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor:
            theme.mode == "dark"
              ? theme.COLORS.BACKGROUND_SECONDARY
              : theme.COLORS.TEXT_PRIMARY,
          tabBarInactiveTintColor: "#a6a6a6",
          headerShown: false,
          tabBarStyle: {
            borderTopColor: theme.COLORS.BRAND,
            borderTopWidth: 2,
            height: 60,
          },
          tabBarLabelStyle: {
            fontFamily: theme.FONTS.REGULAR,
            marginBottom: 5,
          },
          // tabBarInactiveBackgroundColor: '#000',
          // tabBarActiveBackgroundColor: '#000'
        })}
      >
        <Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" size={size} color={color} />
            ),
          }}
        />
        <Screen
          name="FavoritedProducts"
          component={FavoritedProducts}
          options={{
            tabBarBadge: 11,
            tabBarLabel: "Favoritos",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="heart" size={size} color={color} />
            ),
          }}
        />
        <Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarBadge: 3,
            tabBarLabel: "Carrinho",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="cart" size={size} color={color} />
            ),
          }}
        />
        <Screen
          name="Departaments"
          component={Departaments}
          options={{
            tabBarLabel: "Departamentos",
            tabBarIcon: ({ color, size }) => (
              <Feather name="list" size={size} color={color} />
            ),
          }}
        />
      </Navigator>
    );
  }

  return (
    <NavigatorStack screenOptions={{ animation: "fade_from_bottom" }}>
      <ScreenStack
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <ScreenStack
        name="ProductDetails"
        component={ProductDetails}
        options={{
          title: "Detalhes do produto",
          headerStyle: {
            backgroundColor: theme.COLORS.BRAND,
          },
          headerTintColor: theme.COLORS.BACKGROUND_PRIMARY,
          headerTitleStyle: {
            fontFamily: theme.FONTS.BOLD,
          },
          headerShown: false,
        }}
      />
      <ScreenStack
        name="BannerContent"
        component={BannerContent}
        options={{
          title: "Conteúdo do banner",
          headerStyle: {
            backgroundColor: theme.COLORS.BRAND,
          },
          headerTintColor: theme.COLORS.BACKGROUND_PRIMARY,
          headerTitleStyle: {
            fontFamily: theme.FONTS.BOLD,
          },
        }}
      />
      <ScreenStack
        name="CategoriesProducts"
        component={CategoriesProducts}
        options={{
          title: "Categoria",
          headerStyle: {
            backgroundColor: theme.COLORS.BRAND,
          },
          headerTintColor: theme.COLORS.BACKGROUND_PRIMARY,
          headerTitleStyle: {
            fontFamily: theme.FONTS.BOLD,
          },
        }}
      />
      <ScreenStack
        name="NossasLojas"
        component={NossasLojas}
        options={{
          title: "Nossas lojas",
          headerStyle: {
            backgroundColor: theme.COLORS.BRAND,
          },
          headerTintColor: theme.COLORS.BACKGROUND_PRIMARY,
          headerTitleStyle: {
            fontFamily: theme.FONTS.BOLD,
          },
        }}
      />
      <ScreenStack
        name="Vendedores"
        component={Vendedores}
        options={{
          title: "Vendedores",
          headerStyle: {
            backgroundColor: theme.COLORS.BRAND,
          },
          headerTintColor: theme.COLORS.BACKGROUND_PRIMARY,
          headerTitleStyle: {
            fontFamily: theme.FONTS.BOLD,
          },
          animation: "slide_from_right",
        }}
      />
    </NavigatorStack>
  );
}
