import React, { useState, useEffect, createContext } from "react";

export const CurrentLocationContext = createContext({});

export const CurrentLocationContextProvider = ({ children }) => {
    const [location, setLocation] = useState({});
  //   latitude: -26.2172064,
  //     longitude: 27.8943834,

  useEffect(() => {
    async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let local = await Location.getCurrentPositionAsync({});
      setLocation(local);
      console.log(location);
    };
  }, [location]);

    return (
        <CurrentLocationContext.Provider value={{location}}>{children}</CurrentLocationContext.Provider>
    );
}
