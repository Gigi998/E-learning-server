import { PaginationQuery } from "../../utils/types";

export interface BooksQuery extends PaginationQuery {
  isAvailable: string;
}
