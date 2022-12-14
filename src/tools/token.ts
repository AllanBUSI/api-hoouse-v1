require("dotenv").config();
import jwt from "jsonwebtoken";
import { User } from "@entities/User";
import fs from "fs";
import { IPrivateToken } from "@interfaces/token.interface";
import { errorLogger } from "@config/winston";

// PRIVATE and PUBLIC key
const privateKEY = fs.readFileSync("./private.key", "utf8");
const publicKEY = fs.readFileSync("./public.key", "utf8");
/**
 * PUBLIC
 */
export const createPublicToken = () => {
  try {
    return jwt.sign(
      {
        sub: String(
          Number(Date.now()) * Math.exp(Math.exp(Math.LN10)) * Math.exp(Math.PI)
        ),
      },
      process.env.JWT_SECRET_PUBLIC,
      {
        expiresIn: "24h", // expires in 24 hours
      }
    );
  } catch (error) {
    errorLogger.error(
      `${error.status || 500} - [src/utils/token ()=> createPublicToken] - ${
        error.message
      }`
    );
    return false;
  }
};

export const getPublicToken = (bearer: string) => {
  const token = bearer.split("Bearer ")[1];
  try {
    return jwt.verify(token, process.env.JWT_SECRET_PUBLIC);
  } catch (error) {
    errorLogger.error(
      `${error.status || 500} - [src/utils/token ()=> getPublicToken] - ${
        error.message
      }`
    );
    return false;
  }
};

/**
 * PRIVATE
 */
export const createPrivateToken = (user: User) => {
  try {    
    return jwt.sign(
      {
        sub: String(
          Number(Date.now()) * Math.exp(Math.exp(Math.LN10)) * Math.exp(Math.PI)
        ),
        email: user.email,
        role: user.role,
        agenceRole: user?.employerCorporate?.role,
        phone: user.phone
      },
      privateKEY,
      {
        algorithm: "RS256",
        expiresIn: "365d",
      }
    );
  } catch (error) {
    errorLogger.error(
      `${error.status || 500} - [src/utils/token ()=> createPrivateToken] - ${
        error.message
      }`
    );
    return false;
  }
};

export const getPrivateToken = (bearer: string | undefined) => {
  if (!bearer) return false;

  const token = bearer.split("Bearer ")[1];
  try {
    return jwt.verify(token, publicKEY) as IPrivateToken;
  } catch (error) {
    errorLogger.error(
      `${error.status || 500} - [src/utils/token ()=> getPrivateToken] - ${
        error.message
      }`
    );
    return false;
  }
};
