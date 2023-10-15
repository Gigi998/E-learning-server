const bcrypt = require("bcrypt");
import { Request, Response } from "express";
import adminService from "../services/admin.service";

const handleRegister = async ({ body: { email, pwd } }: Request, res: Response) => {
  try {
    const hashedPwd = await bcrypt.hash(pwd, 10);
    const user = await adminService.registerUser(email, hashedPwd);
    res.status(200).json({ message: `New user created ${user.email}` });
  } catch (error: any) {
    if (error.code === "P2002") {
      return res.status(409).json({ message: "Email already in use" });
    }
    res.status(500).json({ message: error.message });
  }
};

export default handleRegister;
