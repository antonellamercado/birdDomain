import React, {useState, useEffect} from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";



export const Mapa = ({position, observation, id}) => {

// const position = [-24.1847222,-65.299166]
// const observation = [-23.67, -64.87]

const plane = new Icon({
  iconUrl: 'https://www.flaticon.com/svg/static/icons/svg/67/67076.svg',
  iconSize: [25, 25],
  popupAnchor:  [-1, -20]
});

const bins = new Icon({
  iconUrl: 'https://www.flaticon.es/svg/static/icons/svg/425/425951.svg',
  iconSize: [25, 25],
  popupAnchor:  [-1, -20]
});

//{position,observation}
// const [mapPosition, setMapPosition] = useState([]);
// const [mapObservation, setMapObservation] = useState([]);

// useEffect(() => {
//   if (position !== undefined && observation !== undefined){
//     setMapPosition(position)
//     setMapObservation(observation)
//   }
//  }, [position, observation])

  return(

        <MapContainer center={ position } zoom={6} scrollWheelZoom={true}>
         <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        <Marker key={id} position={ position } icon = {plane}> 
        <Popup>Punto de retiro</Popup>
        </Marker>
         <Marker key={id} position={ observation } icon = {bins}> 
        <Popup>Punto de observacion</Popup> 
        </Marker>
        </MapContainer>
    );
}

export default Mapa;