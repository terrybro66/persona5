// src/components/SearchBox.js
import React, { useState, useEffect } from "react";
import styles from "./SearchBox.module.css";

const SearchBox = ({ pointsOfInterest, flyTo }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPointsOfInterest, setFilteredPointsOfInterest] = useState([]);

  useEffect(() => {
    setFilteredPointsOfInterest(
      pointsOfInterest.filter((poi) =>
        poi.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, pointsOfInterest]);

  const handleFlyTo = (poi) => {
    flyTo(poi);
    setSearchTerm("");
  };

  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <ul className="poi-list">
          {filteredPointsOfInterest.map((poi) => (
            <li key={poi.name}>
              <button onClick={() => handleFlyTo(poi)}>{poi.name}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
