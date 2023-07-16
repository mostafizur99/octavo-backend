## Node.js Backend Server

This is a simple backend server using node.js,mongoose, mongoDb database.

### Live Link: https://assignment-4-phi.vercel.app

### Health check

```sh
api/v1/health
```

### Application Routes:

## Main part

### Auth (User)

- Route: https://assignment-4-phi.vercel.app/api/v1/auth/login (POST)
- Route: https://assignment-4-phi.vercel.app/api/v1/auth/signup (POST)
- Route: https://assignment-4-phi.vercel.app/api/v1/auth/refresh-token (POST)

### Auth (Admin)

- Route: https://assignment-4-phi.vercel.app/api/v1/admins/create-admin (POST)
- Route: https://assignment-4-phi.vercel.app/api/v1/admins/login (POST)

### User

- Route: https://assignment-4-phi.vercel.app/api/v1/users (GET)
- Route: https://assignment-4-phi.vercel.app/api/v1/users/64a4233f4cfcfa42a92a084e (Single GET) Include an id that is saved in your database
- Route: https://assignment-4-phi.vercel.app/api/v1/users/64a4240484cb60cfa98a70c5 (PATCH) Include an id that is saved in your database
- Route: https://assignment-4-phi.vercel.app/api/v1/users/64a4240484cb60cfa98a70c5 (DELETE) Include an id that is saved in your database

#### Cows

- Route: https://assignment-4-phi.vercel.app/api/v1/cows (POST)
- Route: https://assignment-4-phi.vercel.app/api/v1/cows (GET)
- Route: https://assignment-4-phi.vercel.app/api/v1/cows/64a453be26d63688c2b5fad7 (Single GET) Include an id that is saved in your database
- Route: https://assignment-4-phi.vercel.app/api/v1/cows/64a453be26d63688c2b5fad7 (PATCH) Include an id that is saved in your database
- Route: https://assignment-4-phi.vercel.app/api/v1/cows/64a453be26d63688c2b5fad7(DELETE) Include an id that is saved in your database

#### Orders

- Route: https://assignment-4-phi.vercel.app/api/v1/orders (POST)
- Route: https://assignment-4-phi.vercel.app/api/v1/orders (GET)

## Bonus Part

#### Admin

-Route: https://assignment-4-phi.vercel.app/api/v1/admins/create-admin (POST)

#### My Profile

- Route: https://assignment-4-phi.vercel.app/api/v1/users/my-profile (GET)
- Route: https://assignment-4-phi.vercel.app/api/v1/users/my-profile (PATCH)

#### Order:

- Route: https://assignment-4-phi.vercel.app/api/v1/orders/64a44ac5fe4439c00f24660f (GET)
