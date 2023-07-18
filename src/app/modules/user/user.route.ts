import express from 'express';
const router = express.Router();
import { UserController } from './user.controller';
import auth from '../../middlewares/auth';

router.get('/my-profile', auth(), UserController.getMyProfile);
router.post('/wishlist', auth(), UserController.wishlistCreate);
router.patch('/wishlist', auth(), UserController.wishlistRemove);
router.post('/read-list', auth(), UserController.readingListCreate);
router.patch('/read-list', auth(), UserController.readingListRemove);
router.put('/read-list', auth(), UserController.readingListStatusUpdate);

export const UserRoutes = router;
