import { useEffect, useState } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { StyleSheet } from "react-native";
import {
  TooltipMaker,
  WrapperButtons,
  ButtonGoToVendedores,
  ButtonGoToLocation,
  TitleLoja,
  TextAdress,
  TextFuncionamento,
  Row,
  MessageVendedores,
} from "./styles";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

import CustomStatusBar from "../../components/CustomStatusBar";

import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
  watchPositionAsync,
  LocationAccuracy,
} from "expo-location";

import { Feather } from "@expo/vector-icons";

export function NossasLojas(props) {
  const theme = useTheme();
  const navigation = useNavigation();

  const [location, setLocation] = useState(null);

  useEffect(() => {
    requestLocationPermissions();
  }, []);

  useEffect(() => {
    watchPositionAsync(
      {
        accuracy: LocationAccuracy.Highest,
        timeInterval: 1000,
        distanceInterval: 1,
      },
      (response) => {
        setLocation(response);
        // mapRef.current?.animateCamera({
        //   pitch: 70,
        //   center: response.coords,
        // });
      }
    );
  }, []);

  async function requestLocationPermissions() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);
    }
  }

  return (
    <>
      <CustomStatusBar />
      {location && (
        <MapView
          showsUserLocation={false}
          showsMyLocationButton
          showsCompass
          showsScale
          zoomControlEnabled={false}
          toolbarEnabled
          //ref={mapRef}
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
          >
            <Callout
              tooltip
              onPress={() => {
                navigation.navigate("Vendedores");
              }}
            >
              <TooltipMaker>
                <TitleLoja>NOME DA LOJA</TitleLoja>
                <TextAdress>Endereço da loja</TextAdress>

                <Row>
                  <Feather
                    name="clock"
                    size={12}
                    color={theme.COLORS.TEXT_PRIMARY}
                  />
                  <TextFuncionamento>10h às 22h</TextFuncionamento>
                </Row>

                <MessageVendedores>
                  Clique para ver os vendedores
                </MessageVendedores>
                {/* <WrapperButtons>
                  <ButtonGoToVendedores></ButtonGoToVendedores>
                  <ButtonGoToLocation></ButtonGoToLocation>
                </WrapperButtons> */}
              </TooltipMaker>
            </Callout>
          </Marker>
        </MapView>
      )}
    </>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  map: {
    flex: 1,
    width: "100%",
    position: "relative",
  },
  shadowBox: {
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 3,
  },
});
