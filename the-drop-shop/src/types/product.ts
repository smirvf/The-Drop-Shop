export interface Product {
    productId: string;
    title: string;
    description: string;
    brand: string;
    price: number;
    images: Image[];
    sizes: Size[];
}

export interface Image {
    imageId: string;
    name: string;
    data: {
        //returned as base64
        data: string;
    };
}

export interface Size {
    sizeId: string;
    size: number;
    stock: number;
}