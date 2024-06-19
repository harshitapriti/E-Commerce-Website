import mongoose from 'mongoose';

const accessoriesSchema = new mongoose.Schema({
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

const Accessories = mongoose.model('Accessories', accessoriesSchema);

export default Accessories;

