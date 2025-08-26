import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productroute from "./routes/productroute.js";

dotenv.config();
const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use("/products", productroute);

const PORT = process.env.PORT || 5000;

// Connect to DB first, then start server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server started at http://localhost:${PORT}`);
    });
}).catch((err) => {
    console.error("Failed to connect to DB:", err);
    process.exit(1);
});