import { Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IBook } from './book.interface';
import httpStatus from 'http-status';
import { BookService } from './book.service';
import pick from '../../../shared/pick';
import { bookFilterableFields } from './book.constant';
import { paginationFields } from '../../../constants/pagination';
import ApiError from '../../../errors/ApiError';

const createBook: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const user = req.user;
    if (!user) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Unavailable user');
    }
    const bookInput = {
      user: user.userId,
      ...req.body,
    };

    const result = await BookService.createBook(bookInput);

    sendResponse<IBook>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Book created successfully',
      data: result,
    });
  }
);

const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, bookFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await BookService.getAllBooks(filters, paginationOptions);

  sendResponse<IBook[]>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Books retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await BookService.getSingleBook(id);

  sendResponse<IBook>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Book retrieved successfully',
    data: result,
  });
});

const updateBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await BookService.updateBook(id, updatedData);

  sendResponse<IBook>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Book updated successfully',
    data: result,
  });
});

const reviewBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = req.user;
  if (!user) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Unavailable user');
  }
  const updatedData = {
    reviewer: user.userId,
    ...req.body,
  };

  const result = await BookService.reviewBook(id, updatedData);

  sendResponse<IBook>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Reviewed book  successfully',
    data: result,
  });
});

const deleteBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await BookService.deleteBook(id);

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book deleted successfully',
    data: result,
  });
});

export const BookController = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  reviewBook,
  deleteBook,
};
