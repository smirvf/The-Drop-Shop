import { Product } from "@/types/product";

export interface ShoeTileInterface {
    shoe: Product;
}

export interface ShoeTile {
    id: string;
    image: string;
    title: string;
    price: number;
    inStock: boolean;
}