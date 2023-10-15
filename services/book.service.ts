import prisma from "../prisma";

const getAllBooks = async (query: any) => {
  if (Object.keys(query).length === 0) {
    return prisma.book.findMany();
  } else {
    if (query.freeBooks === "true") {
      return prisma.book.findMany({ where: { Student: { none: {} } } });
    }
    if (query.freeBooks === "false") {
      return prisma.book.findMany();
    }
  }
};

const addNewBook = async (title: string) => {
  return prisma.book.create({
    data: {
      title: title,
    },
  });
};

const findBookById = async (id: string) => {
  return await prisma.book.findUnique({
    where: {
      id: id,
    },
  });
};

const deleteBook = async (id: string) => {
  return await prisma.book.delete({
    where: {
      id: id,
    },
  });
};

export default { getAllBooks, addNewBook, findBookById, deleteBook };
