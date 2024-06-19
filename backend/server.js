import express from 'express';
import mongoose from 'mongoose';
import itemRoute from './routes/items.js';
import userRoute from './routes/users.js';
import Clothing from './models/clothing.js';
import Handcraft from './models/handcraft.js';
import Accessories from './models/accessories.js';
import Slider from './models/slider.js';
import Customers from './models/users.js';
import cors from 'cors';

const PORT = process.env.PORT || 5000;

const app = express();

//middleware
app.use(express.json());
app.use(cors());

//MongoDB connection
mongoose.connect('mongodb+srv://harshitapriti188:Harshita_247@cluster0.i92cie4.mongodb.net/');

const db = mongoose.connection;
db.on('connected', () => {
    console.log('Connected to database');
});

db.on('error', (err) => {
    console.error('Error connecting to database: ', err);
});

//routes
app.use(itemRoute);
app.use(userRoute);

//server runs on specified port
app.listen(PORT, () => {
    console.log(`Server running on port number ${PORT}...`);
});