'use server';

//import { PrismaClient } from '@prisma/client';
import { convertToPlainObject } from '../utils';
import prisma from '@/lib/prisma'

import { LATEST_PRODUCTS_LIMIT } from '../constants';



// Get the latest products
export async function getLatestProducts() {
  //const prisma = new PrismaClient();

  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: 'desc' },
  });

  return convertToPlainObject(data).map((product) => ({
    ...product,
    price: product.price.toString(),
    rating: product.rating.toString(),
  }));

 // return convertToPlainObject(data);
}

// Get single product by slug
export async function getProductBySlug(slug: string) {
  const data = await prisma.product.findFirst({
    where: { slug: slug },
  });

  if(data)

  return {
    ...data,
    price: data.price.toString(),
    rating: data.rating.toString(),
  };
}
