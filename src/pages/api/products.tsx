import type { NextApiRequest, NextApiResponse } from 'next';
import { getProducts } from './getProducts';

export default async function handler(_: NextApiRequest,res: NextApiResponse) {
  const products = await getProducts()
  res.status(200).json(products)
}
