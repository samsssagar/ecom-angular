export type Product = {
    id: number;
    brand: string;
    productName: string;
    description: string;
    originalPrice: number;
    discountPercent: number;
    imageUrl: string;
    sizes: ProductSize[]
}

export type ProductSize = {
    number: number;
    isAvailable: boolean;
    stocksLeft: number;
}