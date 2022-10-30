import { errorLogger } from "@config/winston";
import axios from "axios";
import databaseManager from "../database";

export const geocode = (a) => {
  return a;
};

export const getCoordinates = async (
  address: string
): Promise<false | number[]> => {
    const { data } = await axios.get(
      "https://api-adresse.data.gouv.fr/search",
      {
        params: {
          limit: 15,
          autocomplete: 0,
          q: address,
        },
      }
    );
    return data.features[0]?.geometry.coordinates;
};

export const cityInfo = async (params) => {
  var config: object = {
    method: "get",
    url:
      "https://geo.api.gouv.fr/communes?nom=" +
      params +
      "&fields=code,nom,population,contour,departement,codeDepartement,codeRegion,region,centre,surface,codesPostaux",
  };
  const ville = await axios(config);
  return ville.data;
};

export const adresseInfo = async (params) => {
  var config: object = {
    method: "get",
    url: "https://api-adresse.data.gouv.fr/search/?q=" + params,
  };
  const adress = await axios(config);
  return adress.data;
};
