import axios from "axios";
import { adresseInfo } from "./geocoder";

export const mapboxChemin = async (info) => {
  let chemin1 = info.adLon + "," + info.adLat;
  let chemin2 = info.userLon + "," + info.userLat;

  const { data } = await axios.get(
    "https://api.mapbox.com/directions/v5/mapbox/driving/" +
      chemin1 +
      ";" +
      chemin2 +
      "?annotations=maxspeed,congestion&overview=full&geometries=geojson&access_token=" +
      process.env.MAPBOX_API_KEY,
    {
      method: "get",
    }
  );

  return data;
};

// https://api.mapbox.com/geocoding/v5/mapbox.places/Avenue%20gaston%20bertier.json

export const mapboxSearch = async (info) => {

  const { data } = await axios.get(
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
      info +
      ".json?types=country,postcode,address,locality,region,district,place,neighborhood&limit=10&language=fr,en&access_token=" +
      process.env.MAPBOX_API_KEY,
    {
      method: "get",
    }
  );

  return data;
};

export const mapboxSearchVille = async (info) => {

  const { data } = await axios.get(
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
      info +
      ".json?types=locality,postcode&limit=10&language=fr&access_token=" +
      process.env.MAPBOX_API_KEY,
    {
      method: "get",
    }
  );

  return data;
};

