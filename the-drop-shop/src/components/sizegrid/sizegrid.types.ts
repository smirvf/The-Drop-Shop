import { Size } from "@/types/product";
import { Dispatch, SetStateAction } from "react";

export interface SizeGridInterface {
    sizes: Size[];
    setSelectedSize: Dispatch<SetStateAction<Size | undefined>>;
}