import { Request, Response } from "express";
import adminService from "../services/admin.service";
import { UserFindersKey } from "../utils/adminDto";
import { verifyJWT } from "../utils/helpers";
import { ACCESS_TOKEN_DURATION } from "../utils/types";

const handleRefreshToken = async ({ cookies }: Request, res: Response) => {
  // No cookie
  if (!cookies.jwt) return res.status(401).json({ message: "No cookies" });

  const refreshToken = cookies.jwt;
  // Find user with token
  const foundUser = await adminService.findUserBy(UserFindersKey.REFRESH_TOKEN, refreshToken);

  if (!foundUser) return res.status(403);

  verifyJWT({
    token: refreshToken,
    tokenSecret: process.env.REFRESH_TOKEN_SECRET,
    foundUser: foundUser,
    res: res,
    tokenDuration: ACCESS_TOKEN_DURATION,
  });
};

export default handleRefreshToken;
