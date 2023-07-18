import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IUser } from './user.interface';
import { UserService } from './user.service';
import ApiError from '../../../errors/ApiError';

const getMyProfile = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;
  if (!user) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Unavailable user');
  }
  const id = user.userId;
  const result = await UserService.getSingleUser(id);

  sendResponse<IUser>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User retrieved successfully',
    data: result,
  });
});

const wishlistCreate = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;
  if (!user) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Unavailable user');
  }
  const updatedData = {
    ...req.body,
  };

  const result = await UserService.wishlistCreate(user.userId, updatedData);

  sendResponse<IUser>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Reviewed book  successfully',
    data: result,
  });
});

const wishlistRemove = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;
  if (!user) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Unavailable user');
  }
  const updatedData = {
    ...req.body,
  };

  const result = await UserService.wishlistRemove(user.userId, updatedData);

  sendResponse<IUser>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Reviewed book  successfully',
    data: result,
  });
});

const readingListCreate = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;
  if (!user) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Unavailable user');
  }
  const updatedData = {
    ...req.body,
  };

  const result = await UserService.readingListCreate(user.userId, updatedData);

  sendResponse<IUser>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Reviewed book  successfully',
    data: result,
  });
});

const readingListRemove = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;
  if (!user) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Unavailable user');
  }
  const updatedData = {
    ...req.body,
  };

  const result = await UserService.readingListRemove(user.userId, updatedData);

  sendResponse<IUser>(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Reviewed book  successfully',
    data: result,
  });
});

const readingListStatusUpdate = catchAsync(
  async (req: Request, res: Response) => {
    const user = req.user;
    if (!user) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Unavailable user');
    }
    const updatedData = {
      ...req.body,
    };

    const result = await UserService.readingListStatusUpdate(
      user.userId,
      updatedData
    );

    sendResponse<IUser>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Reviewed book  successfully',
      data: result,
    });
  }
);

export const UserController = {
  getMyProfile,
  wishlistCreate,
  wishlistRemove,
  readingListCreate,
  readingListRemove,
  readingListStatusUpdate,
};
