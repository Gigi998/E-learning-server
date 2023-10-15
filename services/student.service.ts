import prisma from "../prisma";
import { StudentFindersKey, CreateStudent } from "../utils/studentDto";

const getAllStudents = async () => {
  return prisma.student.findMany();
};

const getStudentby = async (finder: StudentFindersKey, value: any) => {
  return await prisma.student.findUnique({
    where: {
      [finder]: value,
    },
  });
};

const getStudentWithBookBy = async (finder: StudentFindersKey, value: any) => {
  return await prisma.student.findUnique({
    where: {
      [finder]: value,
    },
    include: { studentBook: true },
  });
};

const updateStudentBook = async (studentId: string, bookId: string | null) => {
  return await prisma.student.update({
    where: {
      id: studentId,
    },
    data: {
      studentBookId: bookId,
    },
  });
};

const createNewStudent = async ({ name, email }: CreateStudent) => {
  return await prisma.student.create({
    data: {
      name,
      email,
    },
  });
};

const deleteStudent = async (id: string) => {
  return await prisma.student.delete({
    where: {
      id: id,
    },
  });
};

const updateStudent = async ({ id, name, email }: any) => {
  return await prisma.student.update({
    where: {
      id: id,
    },
    data: {
      name,
      email,
    },
  });
};

export default {
  getAllStudents,
  getStudentby,
  updateStudentBook,
  createNewStudent,
  deleteStudent,
  getStudentWithBookBy,
  updateStudent,
};
