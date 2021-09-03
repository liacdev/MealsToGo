import * as React from "react";
import MapView from "react-native-maps";
import { StyleSheet, Dimensions } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const MapScreen = () => (
  <SafeArea>
    <MapView style={styles.map} />
  </SafeArea>
);

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
