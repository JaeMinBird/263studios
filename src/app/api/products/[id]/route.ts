import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

interface Style {
  id: number;
  name: string;
  image: string;
  productId: number;
}

interface Size {
  id: number;
  name: string;
  productId: number;
}

interface PrismaProduct {
  id: number;
  name: string;
  price: { toString: () => string };  // Handle Prisma Decimal
  image: string;
  description: string | null;
  styles: Style[];
  sizes: Size[];
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const product = await prisma.product.findUnique({
      where: { 
        id: parseInt(params.id) 
      },
      include: {
        styles: true,
        sizes: true,
      }
    }) as PrismaProduct | null;

    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    }

    const transformedProduct = {
      id: product.id.toString(),
      name: product.name,
      price: Number(product.price.toString()),
      image: product.image,
      style: product.styles[0]?.name || '',
      description: product.description || '',
      styles: product.styles.map((style: Style) => ({
        name: style.name,
        image: style.image
      })),
      sizes: product.sizes.map((size: Size) => size.name)
    }

    return NextResponse.json(transformedProduct)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 })
  }
} 