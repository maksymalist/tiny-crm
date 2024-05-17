"use client";

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Map, { useMap } from "react-map-gl";
import { LngLat } from "mapbox-gl";

type Props = {};

const AddressForm = (props: Props) => {
  const [location, setLocation] = useState("");
  const [zip, setZip] = useState("");

  const [latitude, setLatitude] = useState(40.7128);
  const [longitude, setLongitude] = useState(74.006);

  const { current } = useMap();

  const mapRef = useRef(null);

  const search = async () => {
    const url = `https://api.mapbox.com/search/geocode/v6/forward?q=${location}&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`;

    const response = await axios.get(url);

    const data = response.data;

    console.log(data);

    const longitude = data.features[0].geometry.coordinates[0];
    const latitude = data.features[0].geometry.coordinates[1];

    setLatitude(latitude);
    setLongitude(longitude);

    const lngLat = new LngLat(0, 0);

    current?.panTo(lngLat);

    // set the map to the new location
  };

  return (
    <div>
      <h1 className="mb-6 text-2xl">Prospect Location 📍</h1>{" "}
      <div className="flex flex-row items-center">
        <input
          type={"text"}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="123 abc st"
          className={
            "border-input placeholder:text-muted-foreground focus-visible:ring-ring mr-4 flex h-9 w-full rounded-md border bg-transparent bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
          }
        />
        <input
          type={"text"}
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          placeholder="Zip Code (optional)"
          className={
            "border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-[150px] rounded-md border bg-transparent bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
          }
        />
        <button
          className="ml-2 rounded-md bg-green-300 p-[5px] px-6 font-bold text-white"
          onClick={search}
        >
          Search
        </button>
      </div>
      <div className="mt-10 h-full w-full">
        <h1>{longitude}</h1>
        <h1>{latitude}</h1>
        <Map
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
          initialViewState={{
            longitude: longitude,
            latitude: latitude,
            zoom: 12,
          }}
          style={{ width: 600, height: 400 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          ref={mapRef}
        />
      </div>
    </div>
  );
};

export default AddressForm;
