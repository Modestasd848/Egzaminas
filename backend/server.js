import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './routes/router.js';

dotenv.config();

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(cors);

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('Connected'))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`application running on port ${PORT}`));
