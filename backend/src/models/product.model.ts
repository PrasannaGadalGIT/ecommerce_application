import mongoose, { Document, Schema, Model } from 'mongoose';


export interface IProduct extends Document {
  title: string;
  price: number;
  description?: string;
  category?: string;
  images?: string[];
  inStock?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * Step 2: Define the schema for MongoDB
 */
const productSchema: Schema<IProduct> = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Product title is required'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Product price is required'],
      min: [0, 'Price must be a positive number'],
    },
    description: {
      type: String,
    },
    category: {
      type: String,
      trim: true,
    },
    images: [
      {
        type: String,
      },
    ],
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);


export const Product: Model<IProduct> = mongoose.model<IProduct>('Product', productSchema);
