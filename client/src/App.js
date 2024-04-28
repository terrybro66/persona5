// src/App.js
import React from "react";
import MapComponent from "./components/MapComponent/MapComponent";
import "./App.css";

function App() {
  const initialViewState = {
    longitude: 139.75,
    latitude: 35.66,
    zoom: 15,
    pitch: 0,
    bearing: 0,
  };

  const mapStyle = "mapbox://styles/mapbox/streets-v11";

  return (
    <div className="App">
      <MapComponent initialViewState={initialViewState} mapStyle={mapStyle} />
    </div>
  );
}

export default App;
