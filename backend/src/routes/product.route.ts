import express, { Router } from 'express';
import {
  getProducts,
  createProduct,
} from '../controller/product.controller';

const router: Router = express.Router();

// @route   GET /api/products
// @desc    Get all products
// @access  Public
router.get('/', getProducts);

// @route   POST /api/products
// @desc    Create a new product
// @access  Public (can secure later)
router.post('/', createProduct);

export default router;
