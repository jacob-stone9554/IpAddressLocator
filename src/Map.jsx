import './Map.css'
import React from 'react';
import { useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

function Map () {
    const mapRef = useRef(null);
    const mapInstance = useRef(null);
    const [ip, setIp] = useState("");

    useEffect(() => {
       if(!mapRef.current || mapInstance.current) return;


        // Use a CORS proxy with the ifconfig.co API
        fetch("https://api.allorigins.win/get?url=" + encodeURIComponent("https://ifconfig.co/json"))
            .then((response) => response.json())
            .then((data) => setIp(JSON.parse(data.contents).ip))
            .catch((error) => console.error("Error fetching IP:", error));

        console.log(ip)

       mapInstance.current = L.map(mapRef.current, {
           zoomControl: false,
           attributionControl: false
       }).setView([40.67, -73.94], 13);

       L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(mapInstance.current);
       //https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png

        const DefaultIcon = L.icon({
            iconUrl: "src/assets/icon-location.svg",
            shadowUrl: markerShadow,
            iconSize: [32,39],
            iconAnchor: [12, 41],
        });

        L.marker([40.67, -73.94], { icon: DefaultIcon }).addTo(mapInstance.current);

        return () => {
            if(mapInstance.current) {
                mapInstance.current.remove();
                mapInstance.current = null;
            }
        }
    }, []);


    return (
        <div ref={mapRef} className="map"/>
    );
}



export default Map;