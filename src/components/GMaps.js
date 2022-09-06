import React, { useState, useEffect } from "react";
import { useLoadScript, GoogleMap, MarkerF, InfoWindow } from "@react-google-maps/api";
import evData from "./data/ev-data.json";
import mapStyles from "./mapStyles";
import PieChart from "./PieChart";

export default function GMaps() 
{
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDJsOOXRqIErbvkZdgqZRg5gKV1HFZQb8A",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map/>;

}


    function Map()
    {
     
      const [selectedPark, setSelectedPark] = useState(null);

      useEffect(() => {
        const listener = e => {
          if (e.key === "Escape") {
            setSelectedPark(null);
          }
        };
        window.addEventListener("keydown", listener);
    
        return () => {
          window.removeEventListener("keydown", listener);
        };
      }, []);


      const center = {
        lat: 45.4211,
        lng: -75.6903
      }
      
      const position = {
        lat: 45.4211,
        lng: -75.6903
      } 
      
      const onLoad = marker => {
        console.log('marker: ', marker)
      }
      
      const mapContainerStyle = {
        height: "400px",
        width: "1050px"
      }
  
      return   <GoogleMap
      zoom={10}
      center={center}
      options={{styles:mapStyles}}
      id="marker-example"
      mapContainerStyle={mapContainerStyle}
    >
      {evData.features.map(park => (
        <MarkerF
          key={park.properties.PARK_ID}
          position={{
            
            lat: park.geometry.coordinates[1],
            lng: park.geometry.coordinates[0]
          }}
          onClick={() => {
            setSelectedPark(park);
          }}
        //  icon={{
        //    url: `./Park.svg`,
        //    scaledSize: new window.google.maps.Size(25, 25)
        //  }}
        />
      ))}

{selectedPark && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedPark(null);
          }}
          position={{
            lat: selectedPark.geometry.coordinates[1],
            lng: selectedPark.geometry.coordinates[0]
          }}
        >
          <>
          <div style={{width:"40%", height:"40%"}}>
          <PieChart />
          </div>
          <div>
          
            <h2>{selectedPark.properties.NAME}</h2>
            <p>{selectedPark.properties.DESCRIPTIO}</p>
          </div>
        
          </>
        </InfoWindow>
      )}
      
    </GoogleMap>
    }
  