import express from 'express';
import auth from '../../middlewares/auth';
import { BookValidation } from './book.validation';
import validateRequest from '../../middlewares/validateRequest';
import { BookController } from './book.controller';
const router = express.Router();

// create a book route (private)
router.post(
  '/',
  auth(),
  validateRequest(BookValidation.createBookZodSchema),
  BookController.createBook
);

// get a book by id route
router.get('/:id', BookController.getSingleBook);

// get all books route
router.get('/', BookController.getAllBooks);

// update a book by id route (private)
router.patch(
  '/:id',
  auth(),
  validateRequest(BookValidation.updateBookZodSchema),
  BookController.updateBook
);

// review a book route (private)
router.patch(
  '/review/:id',
  auth(),
  validateRequest(BookValidation.reviewBookZodSchema),
  BookController.reviewBook
);

// update a book by id route (private)
router.delete('/:id', auth(), BookController.deleteBook);

export const BookRoutes = router;
