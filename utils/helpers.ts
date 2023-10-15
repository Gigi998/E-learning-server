const jwt = require("jsonwebtoken");
import { VerifyJWT, User, GenerateJWT } from "./adminDto";
import { NextFunction, Request, Response } from "express";
import { Validators } from "./validatorDto";

export const customValidator = (validate: Validators, body: string[]) => {
  return function (req: Request, res: Response, next: NextFunction) {
    for (const field of body) {
      if (!req[validate] || !req[validate][field]) {
        return res.status(403).json({ message: `${field} required` });
      }
    }
    next();
  };
};

export const generateJWT = ({ email, tokenSecret, tokenDuration }: GenerateJWT) => {
  const token = jwt.sign(
    {
      email: email,
    },
    tokenSecret,
    { expiresIn: tokenDuration }
  );
  return token;
};

export const verifyJWT = ({ token, tokenSecret, foundUser, res, tokenDuration }: VerifyJWT) => {
  jwt.verify(token, tokenSecret, async (err: any, decoded: User) => {
    if (err || foundUser.email !== decoded.email) {
      return res.status(403).json({ message: "Verification token error" });
    }

    const email = decoded.email;
    // Create new acc token
    const accessToken = generateJWT({
      email: foundUser.email,
      tokenSecret: process.env.ACCESS_TOKEN_SECRET,
      tokenDuration: tokenDuration,
    });
    res.json({ accessToken, email });
  });
};
