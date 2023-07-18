import mongoose from 'mongoose';
import { User } from './user.model';
import { IUser, IwishList } from './user.interface';

const getSingleUser = async (
  id: string | mongoose.Types.ObjectId
): Promise<IUser | null> => {
  const result = await User.findOne({ _id: id });
  return result;
};

const wishlistCreate = async (
  id: string | mongoose.Types.ObjectId,
  payload: IwishList
): Promise<IUser | null> => {
  const { book } = payload;
  const result = User.findOneAndUpdate(
    { _id: id },
    { $push: { wishlist: { book: book } } },
    { new: true }
  );
  return result;
};

const wishlistRemove = async (
  id: string | mongoose.Types.ObjectId,
  payload: IwishList
): Promise<IUser | null> => {
  const { book } = payload;
  const result = User.findOneAndUpdate(
    { _id: id },
    { $pull: { wishlist: { book: book } } },
    { new: true }
  );
  return result;
};

const readingListCreate = async (
  id: string | mongoose.Types.ObjectId,
  payload: IwishList
): Promise<IUser | null> => {
  const { book } = payload;

  const result = User.findOneAndUpdate(
    { _id: id },
    { $push: { readList: { book: book, isFinished: false } } },
    { new: true }
  );
  return result;
};

const readingListRemove = async (
  id: string | mongoose.Types.ObjectId,
  payload: IwishList
): Promise<IUser | null> => {
  const { book } = payload;

  const result = User.findOneAndUpdate(
    { _id: id },
    { $pull: { readList: { book: book } } },
    { new: true }
  );
  return result;
};
const readingListStatusUpdate = async (
  id: string | mongoose.Types.ObjectId,
  payload: IwishList
): Promise<IUser | null> => {
  const { book, isFinished } = payload;

  const result = User.findOneAndUpdate(
    { _id: id, 'readList.book': book },
    { $set: { 'readList.$.isFinished': isFinished } },
    { new: true }
  );
  return result;
};

export const UserService = {
  getSingleUser,
  wishlistCreate,
  wishlistRemove,
  readingListCreate,
  readingListStatusUpdate,
  readingListRemove,
};
