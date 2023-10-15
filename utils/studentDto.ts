export enum StudentFindersKey {
  ID = "id",
}

export interface CreateStudent {
  id?: string;
  name: string;
  email: string;
}
