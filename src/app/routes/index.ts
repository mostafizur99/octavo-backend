import express from 'express';
import { HealthRoutes } from '../modules/health/health.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { UserRoutes } from '../modules/user/user.route';
import { BookRoutes } from '../modules/books/book.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/health',
    route: HealthRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/books',
    route: BookRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
