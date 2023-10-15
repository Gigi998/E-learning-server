import { Request, Response, NextFunction } from "express";

const verifyRoles = (rolesArray: any[]) => {
  return (req: any, res: Response, next: NextFunction) => {
    if (!req?.roles) return res.sendStatus(401);
    const result = req.roles
      .map((role: string) => rolesArray.includes(role))
      .find((val: boolean) => val === true);
    if (!result) return res.sendStatus(401);
    next();
  };
};
