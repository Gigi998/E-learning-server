import prisma from "../prisma";
import { UserFindersKey } from "../utils/adminDto";

const registerUser = async (email: string, hashedPwd: string) => {
  const user = await prisma.admin.create({
    data: {
      email: email,
      pwd: hashedPwd,
    },
  });
  return user;
};

const findUserBy = async (finder: UserFindersKey, value: string) => {
  const user = await prisma.admin.findFirst({
    where: {
      [finder]: value,
    },
  });
  return user;
};

const findAndUpdateRefreshToken = async (email: string, refreshToken: string) => {
  await prisma.admin.update({
    where: {
      email: email,
    },
    data: {
      refreshToken: refreshToken,
    },
  });
};

const findAndDeleteRefreshToken = async (refreshToken: string) => {
  const user = await prisma.admin.update({
    where: {
      refreshToken: refreshToken,
    },
    data: {
      refreshToken: "",
    },
  });
  return user;
};

export default { registerUser, findUserBy, findAndUpdateRefreshToken, findAndDeleteRefreshToken };
