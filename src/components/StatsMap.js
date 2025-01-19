import React, { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from "react-simple-maps";

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const StatsMap = () => {
  const [tooltipContent, setTooltipContent] = useState("");

  // Imituoti duomenys
  const regionStats = {
    "North America": "850M",
    "South America": "420M",
    "Europe": "780M",
    "Africa": "290M",
    "Asia": "1.2B",
    "Oceania": "180M"
  };

  return (
    <section style={{
      padding: '120px 20px',
      background: '#1a1a1a',
      position: 'relative'
    }}>
      <h2 
        data-aos="fade-up"
        style={{
          fontSize: 'clamp(40px, 6vw, 80px)',
          margin: '0 0 80px 0',
          textAlign: 'center'
        }}
      >
        Our Listeners
      </h2>

      <div 
        data-aos="fade-up"
        data-aos-delay="200"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative'
        }}
      >
        <ComposableMap
          projectionConfig={{
            rotate: [-10, 0, 0],
            scale: 147
          }}
          style={{
            width: "100%",
            height: "auto"
          }}
        >
          <ZoomableGroup>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      const { NAME } = geo.properties;
                      setTooltipContent(`${NAME}: ${regionStats[NAME] || "Data not available"}`);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    style={{
                      default: {
                        fill: "#2C065D",
                        stroke: "#1a1a1a",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      hover: {
                        fill: "#4C1099",
                        stroke: "#1a1a1a",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      pressed: {
                        fill: "#2C065D",
                        stroke: "#1a1a1a",
                        strokeWidth: 0.5,
                        outline: "none",
                      }
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>

        {tooltipContent && (
          <div 
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'rgba(0,0,0,0.8)',
              padding: '15px 25px',
              borderRadius: '8px',
              backdropFilter: 'blur(5px)',
              zIndex: 10,
              pointerEvents: 'none'
            }}
            className="map-tooltip"
          >
            {tooltipContent}
          </div>
        )}
      </div>

      <div style={{
        position: 'absolute',
        top: '40%',
        right: '15%',
        background: 'rgba(0,0,0,0.7)',
        padding: '15px',
        borderRadius: '8px',
        backdropFilter: 'blur(5px)'
      }}>
        <p style={{ margin: '0 0 5px 0', fontSize: '24px' }}>2.2B</p>
        <p style={{ margin: 0, opacity: 0.8, fontSize: '14px' }}>Rest of the WORLD</p>
      </div>
    </section>
  );
};

export default StatsMap; 