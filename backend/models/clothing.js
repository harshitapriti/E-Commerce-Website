import mongoose from 'mongoose';

const clothingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img_url: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    count_in_stock: {
        type: Number,
        required: true
    },
    review: {
        type: Number,
        required: true
    }
});

const Clothing = mongoose.model('Clothing', clothingSchema);

export default Clothing;

