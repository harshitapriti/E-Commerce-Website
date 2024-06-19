import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config.js';
import Customers from '../models/users.js';
import Ratings from '../models/ratings.js';

const router = express.Router();

//API for sign in
router.post('/api/users/signin', async (req, res) => {
    const { first_name, last_name, email, password } = req.body;

    try {
        const existingUser = await Customers.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new Customers({
            first_name,
            last_name,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// login API
router.post('/api/users/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Customers.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token, first_name: user.first_name, id: user._id }); // Include first_name in the response
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});


// API for posting reviews
router.post('/api/users/rating', async (req, res) => {
    const { star, review } = req.body;

    try {

        const newRating = new Ratings({
            star,
            review
        });

        await newRating.save();

        res.status(201).json({ message: 'Review Submitted Successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

router.get('/api/users/:id', async (req, res) => {
    try {
      const user = await Customers.findById(req.params.id);
      
      if (!user) return res.status(404).json({ message: 'User not found' });
  
      const { first_name, last_name, email } = user;
        res.json({ first_name, last_name, email });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


export default router;