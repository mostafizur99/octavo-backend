import { z } from 'zod';

const createBookZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required ',
    }),
    author: z.string({
      required_error: 'Author is required ',
    }),
    genre: z.string({
      required_error: 'Genre is required ',
    }),
    publicationYear: z.string({
      required_error: 'Publication Date is required ',
    }),
    isFeatured: z
      .boolean({
        required_error: 'isFeatured is required ',
      })
      .optional(),
    price: z.string({
      required_error: 'Price is required ',
    }),
  }),
});

const updateBookZodSchema = z.object({
  body: z.object({
    title: z
      .string({
        required_error: 'Title is required ',
      })
      .optional(),
    author: z
      .string({
        required_error: 'Author is required ',
      })
      .optional(),
    genre: z
      .string({
        required_error: 'Genre is required ',
      })
      .optional(),
    publicationYear: z
      .string({
        required_error: 'Publication Date is required ',
      })
      .optional(),
    isFeatured: z
      .boolean({
        required_error: 'isFeatured is required ',
      })
      .optional(),
    price: z
      .string({
        required_error: 'Price is required ',
      })
      .optional(),
  }),
});

const reviewBookZodSchema = z.object({
  body: z.object({
    rating: z.string({
      required_error: 'Rating is required ',
    }),
    comment: z.string({
      required_error: 'Comment is required ',
    }),
  }),
});

export const BookValidation = {
  createBookZodSchema,
  updateBookZodSchema,
  reviewBookZodSchema,
};
