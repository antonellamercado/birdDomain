import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';



const Wrapper = styled.div `
width:${props=>props.width};
height:${props=>props.height};
`;

var llegada = L.icon({
    iconUrl: 'Static/plane.png',
    iconSize:     [20, 20], // size of the icon
    popupAnchor:  [-1, -20] // point from which the popup should open relative to the iconAnchor
});

var observacion = L.icon({
    iconUrl: 'Static/bin.png',
    iconSize:     [20, 20], // size of the icon
    popupAnchor:  [-1, -20] // point from which the popup should open relative to the iconAnchor
});

export default class Map extends React.Component{
    componentDidMount(){
        this.map = L.map('map',{
            center: [-31.5609,-68.4247],
            zoom:6,
            zoomControl:false,
        });
        L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}',{
            detectRetina:true,
            maxZoom: 30,
            maxNativeZoom:30,
	        ext: 'png'
        }).addTo(this.map);
 
        L.marker([-31.5609,-68.4247],{icon:llegada}).addTo(this.map).bindPopup("Punto de retiro");
        L.marker([-29.2430,-69.3536],{icon:observacion}).addTo(this.map).bindPopup("Punto de observacion");
    }

    render(){
        return <Wrapper width="360px" height="300px" id="map"/>
    }
}

