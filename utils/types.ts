export const ACCESS_TOKEN_DURATION = "60s";
export const REFRESH_TOKEN_DURATION = "1d";

export enum Roles {
  ADMIN = "ADMIN",
  TEACHER = "TEACHER",
  STUDENT = "STUDENT",
}

export enum OrderDirection {
  ASC = "asc",
  DESC = "desc",
}

export interface PaginationQuery {
  orderBy?: string;
  orderDirection?: OrderDirection;
  take?: string;
  skip?: string;
}
