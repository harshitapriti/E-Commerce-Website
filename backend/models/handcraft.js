import mongoose from 'mongoose';

const handcraftSchema = new mongoose.Schema({
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

const Handcraft = mongoose.model('Handcraft', handcraftSchema);

export default Handcraft;

