import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String, // Fixed
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, { timestamps: true }); // Fixed

const Product = mongoose.model("Product", productSchema);

export default Product;
