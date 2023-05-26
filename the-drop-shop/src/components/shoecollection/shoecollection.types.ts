import { Product } from "@/types/product";
import { ShoeTile } from "../shoetile/shoetile.types";

export interface ShoeCollectionInterface {
    title: string;
    products?: Product[];
}