import express from 'express';
import Clothing from '../models/clothing.js';
import Handcraft from '../models/handcraft.js';
import Accessories from '../models/accessories.js';
import Slider from '../models/slider.js';
import Ratings from '../models/ratings.js';

const router = express.Router();

//get clothing items
router.get('/api/clothings', async (req, res) => {
    try {
        const clothingItems = await Clothing.find({});
        res.json(clothingItems);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//get handcraft items
router.get('/api/handcrafts', async (req,res) => {
    try {
        const handcraftItems = await Handcraft.find({});
        res.json(handcraftItems);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//get accessories items
router.get('/api/accessories', async (req, res) => {
    try {
        const accessoriesItems = await Accessories.find({});
        res.json(accessoriesItems);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//get slider items
router.get('/api/slider', async (req, res) => {
    try {
        const sliderItems = await Slider.find({});
        res.json(sliderItems);
    } catch (error) {
        res.staus(500).json({message: error.message});
    }
});

//fetching product by id
router.get('/api/products/:id', async (req, res) => {
    try {
      const product = await Clothing.findById(req.params.id)
        || await Handcraft.findById(req.params.id)
        || await Accessories.findById(req.params.id)
        || await Slider.findById(req.params.id);
      
      if (!product) return res.status(404).json({ message: 'Item not found' });
  
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


//for fetchings reviews
  router.get('/api/rating', async (req, res) => {
    try {
        const reviews = await Ratings.find({});
        res.json(reviews);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

export default router;