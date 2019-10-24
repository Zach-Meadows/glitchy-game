import React from 'react';
import Map from "./features/Map/Map"

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        backgroundColor: "black",
        border: "solid white 5px",
        color: 'white',
        borderRadius: '5px',
        width: '300px',
        margin: '30px'
      }}>
      <h1 style={{
        textAlign: "center"
      }}>*Working Title*</h1>
      </div>
      <Map />
    </div>
  );
}

export default App;
