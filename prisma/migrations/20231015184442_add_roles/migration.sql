-- CreateEnum
CREATE TYPE "Role" AS ENUM ('STUDENT', 'ADMIN', 'TEACHER');

-- AlterTable
ALTER TABLE "Admin" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'STUDENT';
