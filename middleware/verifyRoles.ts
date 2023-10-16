import { Request, Response, NextFunction } from "express";

const verifyRoles = (rolesArray: any[]) => {
  return (req: any, res: Response, next: NextFunction) => {
    if (!req?.role) return res.sendStatus(401);
    const result = rolesArray.includes(req.role);
    if (!result) return res.sendStatus(401);
    next();
  };
};

export default verifyRoles;
