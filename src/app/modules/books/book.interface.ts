import { Model, Types } from 'mongoose';

export type IBook = {
  title: string;
  author: string;
  genre: string;
  publicationYear: string;
  price: string;
  isFeatured: boolean;
  user: Types.ObjectId;
  reviews: [
    {
      rating: string;
      comment: string;
      reviewer: Types.ObjectId;
    }
  ];
};

export type BookModel = Model<IBook>;

export type IBookFilters = {
  genre?: string;
  publicationYear?: string;
  searchTerm?: string;
};

export type IBookReview = {
  rating: string;
  comment: string;
  reviewer: Types.ObjectId;
};
