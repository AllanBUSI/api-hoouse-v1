require("dotenv").config();

import { Ad } from "@entities/Ad";
import { Image } from "@entities/Image";
import { PriceHistory } from "@entities/PriceHistory";
import { SearchHistory } from "@entities/SearchHistory";
import { User } from "@entities/User";
import { FavoryHistory } from "@entities/FavoryHistory";
import { Dpe } from "@entities/Dpe";
import { PropertySold2014 } from "@entities/PropertySold2014";
import { PropertySold2015 } from "@entities/PropertySold2015";
import { PropertySold2016 } from "@entities/PropertySold2016";
import { PropertySold2017 } from "@entities/PropertySold2017";
import { PropertySold2018 } from "@entities/PropertySold2018";
import { PropertySold2019 } from "@entities/PropertySold2019";
import { PropertySold2020 } from "@entities/PropertySold2020";
import { Newsletter } from "@entities/Newsletter";
import { PostalAddress } from "./entities/PostalAddress";
import { AdresseUser } from "@entities/AdresseUser";
import { InfoAd } from "@entities/InfoAd";
import { Meeting } from "@entities/Meeting";
import { ViewAd } from "@entities/ViewAd";
import { Corporate } from "@entities/Corporate";
import { EmployerCorporate } from "@entities/EmployerCorporate";
import { Contact } from "@entities/Contact";
import { Prospect } from "@entities/Prospect";
import { SectionCorporate } from "./entities/SectionCorporate";
import { DataSource, DataSourceOptions } from "typeorm";

const options: DataSourceOptions = {
  type: "mysql",
  host: process.env.TYPEORM_HOST,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  port: +process.env.TYPEORM_PORT,
  logging: false,
  legacySpatialSupport: false,
  entities: [
    Image,
    User,
    Prospect,
    Meeting,
    PostalAddress,
    Ad,
    Corporate,
    ViewAd,
    AdresseUser,
    FavoryHistory,
    SearchHistory,
    Contact,
    EmployerCorporate,
    SectionCorporate,
    PriceHistory,
    InfoAd,
    Dpe,
    Newsletter,
    PropertySold2014,
    PropertySold2015,
    PropertySold2016,
    PropertySold2017,
    PropertySold2018,
    PropertySold2019,
    PropertySold2020,
  ],
  extra: {
    charset: "utf8mb4_general_ci",
    connectionLimit: 100,
  },
};

const AppDataSource = new DataSource(options);
const databaseManager = async () => {
  try {
    return AppDataSource.isInitialized ? AppDataSource : AppDataSource.initialize();
  } catch (error) {
    console.error("Erreur lors de la connexion à la base de données");
  }
};

export default databaseManager;
