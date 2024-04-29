import React, { useEffect, useState } from "react";
import DeckGL from "@deck.gl/react";
import { Map } from "react-map-gl";
import { FlyToInterpolator } from "deck.gl";
import { ScatterplotLayer, PolygonLayer, PathLayer } from "@deck.gl/layers";
import { ScenegraphLayer } from "@deck.gl/mesh-layers";

import Modal from "../Modal/Modal";
import styles from "./MapComponent.module.css";

const MapComponent = ({ initialViewState, pois }) => {
  const [viewState, setViewState] = useState(initialViewState);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log("pois", pois);

  const layers = [
    new ScatterplotLayer({
      id: "scatterplot-layer",
      data: pois,
      getPosition: (d) => [d.longitude, d.latitude],
      getRadius: 1000, // adjust as needed
      getFillColor: [255, 140, 0], // orange
    }),
  ];

  return (
    <div>
      <div className={styles.modal}>
        {!isAuthenticated && <Modal setIsAuthenticated={setIsAuthenticated} />}
      </div>

      <DeckGL
        initialViewState={initialViewState}
        viewState={viewState}
        controller={true}
        onViewStateChange={({ viewState }) => setViewState(viewState)}
        layers={layers}
      >
        <Map
          mapStyle="mapbox://styles/mapbox/dark-v11"
          mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        />
      </DeckGL>
    </div>
  );
};

export default MapComponent;
