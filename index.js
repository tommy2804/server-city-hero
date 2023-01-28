import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import helmet from 'helmet';
import morgan from 'morgan';
import authRoutes from './routes/auth.js';
import requestRoutes from './routes/requests.js';

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use('/auth', authRoutes);
app.use('/request', requestRoutes);

mongoose.set('strictQuery', false);

const PORT = process.env.PORT || 4001;
mongoose
  .connect(
    'mongodb+srv://tommy:tommy123123@cluster0.jjlpf6k.mongodb.net/finals?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(PORT, () => console.log(`SERVER PORT: ${PORT}`));
  })
  .catch((err) => console.error(err));
