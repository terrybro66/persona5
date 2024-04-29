// src/App.js
import React, { useEffect, useState } from "react";
import MapComponent from "./components/MapComponent/MapComponent";
import "./App.css";

function App() {
  const [pointsOfInterest, setPointsOfInterest] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPointsOfInterest = async () => {
      const response = await fetch("http://localhost:5001/pois");
      const data = await response.json();
      setPointsOfInterest(data);
      setIsLoading(false);
    };

    fetchPointsOfInterest();
  }, []);

  const initialViewState = {
    longitude: 139.75,
    latitude: 35.66,
    zoom: 15,
    pitch: 0,
    bearing: 0,
  };

  const mapStyle = "mapbox://styles/mapbox/streets-v11";
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <MapComponent
        initialViewState={initialViewState}
        mapStyle={mapStyle}
        pois={pointsOfInterest}
      />
    </div>
  );
}

export default App;
