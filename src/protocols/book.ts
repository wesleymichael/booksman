export type Book = {
  id: number;
  title: string;
  author: string;
  publisher: string;
  purchaseDate: Date;
  read: boolean;
  review: string;
  grade: number;
};

export type CreateBook = Omit<Book, "id" | "read" | "review" | "grade">;