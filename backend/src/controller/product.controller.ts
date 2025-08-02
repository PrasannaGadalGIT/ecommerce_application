import { Request, Response } from 'express';
import { Product, IProduct } from '../models/product.model';

// @desc    Get all products
// @route   GET /api/products
// @access  Public
export const getProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const products: IProduct[] = await Product.find();
    res.status(200).json(products);
  } catch (error: any) {
    res.status(500).json({ message: error.message || 'Server Error' });
  }
};

// @desc    Create a new product
// @route   POST /api/products
// @access  Public (can make it protected later)
export const createProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, price, description, category, images, inStock } = req.body;

    // Basic validation
    if (!title || !price) {
      res.status(400).json({ message: 'Title and price are required.' });
      return;
    }

    const product: IProduct = new Product({
      title,
      price,
      description,
      category,
      images,
      inStock,
    });

    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error: any) {
    res.status(500).json({ message: error.message || 'Server Error' });
  }
};
