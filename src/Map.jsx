import './Map.css'
import { useEffect, useRef } from 'react';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

function Map () {
    const mapRef = useRef(null);
    const mapInstance = useRef(null);

    useEffect(() => {
       if(!mapRef.current || mapInstance.current) return;

       mapInstance.current = L.map(mapRef.current, {
           zoomControl: false,
           attributionControl: false
       }).setView([51.05, -0.09], 13);

       L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(mapInstance.current);

        const DefaultIcon = L.icon({
            iconUrl: "src/assets/icon-location.svg",
            shadowUrl: markerShadow,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
        });

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