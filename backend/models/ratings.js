import mongoose from 'mongoose';

const ratingSchema = new mongoose.Schema({
    star: {
        type: Number,
        required: true
    },
    review: {
        type: String,
        required: true
    },
});

const Ratings = mongoose.model('Ratings', ratingSchema);

export default Ratings;

