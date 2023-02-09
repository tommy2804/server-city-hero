import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 4001,
  jwt_secret: process.env.JWT_SECRET || 'secret',
};
