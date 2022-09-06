import React, { useState } from 'react';
// import { Icon } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents} from 'react-leaflet';
import "../App.css";
import parkData from "./data/ev-data.json";
import PieChart from "./PieChart";
import BarChart from "./BarChart";

// export const icon = new Icon({
//     iconUrl: "public/skateboarding.svg",
//     iconSize: [25, 25]
//   });
  

export default function OpenStreetMaps(){

    const [activePark, setActivePark] = useState(null);

    return (
        <MapContainer center={[45.4, -75.7]} zoom={12}>
            <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

{parkData.features.map(park => (
        <Marker
          key={park.properties.PARK_ID}
          position={[
            park.geometry.coordinates[1],
            park.geometry.coordinates[0]
          ]}

          eventHandlers={{
            click: () => {
             // console.log("clicked"); // THIS FIRES TWICE
              setActivePark(park);
            },
          }}

        //   onClick={() => {
        //     setActivePark(park);
        //   }}        
         // icon={icon}
          
        />
      ))}

      {activePark && (
        <Popup
          position={[
            activePark.geometry.coordinates[1],
            activePark.geometry.coordinates[0]
          ]}
          onClose={() => {
            setActivePark(null);
          }}
        >
             <>
          <div style={{width:"100%", height:"100%"}}>
          <BarChart />
          </div>
          <div>
            <h2>{activePark.properties.NAME}</h2>
            <p>{activePark.properties.DESCRIPTIO}</p>
          </div>
          </>
        </Popup>
      )}

            </MapContainer>
    );
}
