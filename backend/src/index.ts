import express from 'express';
import connectDB from './dbconnection';
const app = express();
const port = 3001;
import productRoutes from "./routes/product.route"
import userRoutes from './routes/auth.route'
connectDB();

//app.use() -> mounts middleware at the specified path


// reading and converting that raw text into a usable JavaSctipt object is parsing.
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});