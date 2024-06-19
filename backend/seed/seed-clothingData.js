import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Clothing from '../models/clothing.js';
import clothingData from '../data/clothingData.js';
import Handcraft from '../models/handcraft.js';
import handcraftData from '../data/handcraftData.js';
import Accessories from '../models/accessories.js';
import accessoriesData from '../data/accessoriesData.js';
import Slider from '../models/slider.js';
import sliderData from '../data/sliderData.js';

dotenv.config();

//inserting data into database
const seedProducts = async () => {
  try {
    await mongoose.connect('mongodb+srv://harshitapriti188:Harshita_247@cluster0.i92cie4.mongodb.net/');
    console.log('Database connected...');

    await Clothing.deleteMany();
    await Handcraft.deleteMany();
    await Accessories.deleteMany();
    await Slider.deleteMany();

    await Clothing.insertMany(clothingData);
    await Handcraft.insertMany(handcraftData);
    await Accessories.insertMany(accessoriesData);
    await Slider.insertMany(sliderData);
    console.log('Data seeded successfully');
    
    process.exit();
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedProducts();
