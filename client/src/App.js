// src/App.js
import React, { useEffect, useState } from "react";
import { FlyToInterpolator } from "deck.gl";

import MapComponent from "./components/MapComponent/MapComponent";
import SearchBox from "./components/SearchBox/SearchBox";
import ViewToggle from "./components/ViewToggle/ViewToggle";
import "./App.css";

function App() {
  const [pointsOfInterest, setPointsOfInterest] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [viewState, setViewState] = useState({
    longitude: 139.75,
    latitude: 35.66,
    zoom: 50,
    pitch: 90,
    bearing: 0,
  });
  const [isControllerEnabled, setIsControllerEnabled] = useState(true);

  const handleFlyTo = (poi) => {
    setViewState({
      ...viewState,
      longitude: poi.longitude,
      latitude: poi.latitude,
      zoom: 12,
      transitionInterpolator: new FlyToInterpolator(),
      transitionDuration: 1500,
    });
  };

  useEffect(() => {
    const fetchPointsOfInterest = async () => {
      const response = await fetch("http://localhost:5001/pois");
      const data = await response.json();
      setPointsOfInterest(data);
      setIsLoading(false);
    };

    fetchPointsOfInterest();
  }, []);

  const toggleController = () => {
    setIsControllerEnabled((prevIsControllerEnabled) => {
      const newIsControllerEnabled = !prevIsControllerEnabled;
      setViewState((prevState) => ({
        ...prevState,
        pitch: newIsControllerEnabled ? 0 : 90,
      }));
      return newIsControllerEnabled;
    });
  };

  const mapStyle = "mapbox://styles/mapbox/streets-v11";
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <SearchBox pointsOfInterest={pointsOfInterest} flyTo={handleFlyTo} />
      <ViewToggle
        isControllerEnabled={isControllerEnabled}
        toggleController={toggleController}
      />
      <MapComponent
        viewState={viewState}
        setViewState={setViewState}
        mapStyle={mapStyle}
        pois={pointsOfInterest}
        controller={isControllerEnabled}
      />
    </div>
  );
}

export default App;
