import React, { useEffect, useState } from "react";

const Map = () => {
  const [loadMap, setLoadMap] = useState(false);
  const [MapContainer, setMapContainer] = useState(null);
  const [TileLayer, setTileLayer] = useState(null);
  const [Marker, setMarker] = useState(null);
  const [Popup, setPopup] = useState(null);

  useEffect(() => {
    const loadLeaflet = async () => {
      const { MapContainer, TileLayer, Marker, Popup } = await import(
        "react-leaflet"
      );
      setMapContainer(MapContainer);
      setTileLayer(TileLayer);
      setMarker(Marker);
      setPopup(Popup);
      setLoadMap(true);
    };
    loadLeaflet();
  }, []);

  if (!loadMap) return null;

  const position = [9.013094439095415, 38.73469764716893];
  return (
    <>
      {loadMap && (
        <MapContainer
          center={position}
          zoom={11} // Lower the zoom level
          scrollWheelZoom={false}
          style={{ height: "500px", width: "100vw" }} // Set a fixed height and use 100vw for full width
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            maxZoom={12} // Set the maximum zoom level
          />
          <Marker position={position}>
            <Popup>
              My office location <br /> you can find me here
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </>
  );
};

export default Map;
