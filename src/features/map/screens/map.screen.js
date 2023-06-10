import React, { useEffect, useState } from "react";

import { View, Text } from "react-native";
import { styled } from "styled-components";

import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

import { addLocationDataToDatabase } from "../../../utils/firebase/firebase.util";
import { SafeArea } from "../../../utils/safe-area.component";

// ------------------------------ imports ----------------------------- imports ------------------------------------- imports -------

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

const MapScreen = () => {
  // const [location, setLocation] = useState(null);
  const [location, setLocation] = useState({
    // latitude: -26.2172064,
    // longitude: 27.8943834,
  });
  //   latitude: -26.2172064,
  //     longitude: 27.8943834,

  useEffect(() => {
    const getPermissionAndCurrentLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      // console.log(location);
    };
    getPermissionAndCurrentLocation();
  }, []);

  return (
    <SafeArea>
      {Object.keys(location).length ? (
        <Map
          region={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            key="minez"
            title="minez"
            description="minez"
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
          />
        </Map>
      ) : (
        <Map />
      )}
    </SafeArea>
  );
};

export default MapScreen;
