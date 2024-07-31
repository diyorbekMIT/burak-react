import { ProductCollection, ProductSize, ProductStatus, ProductVolume } from "../enums/product.enum";

export interface Product {
    _id: string;
    productStatus: ProductStatus;
    productCollection: ProductCollection;
    productName: string;
    productPrice: number;
    productLeftCount: number;
    productSize : ProductSize;
    productVolume?:ProductVolume;
    productDesc: String;
    productImages: string[];
    productViews: number;
    createdAt: Date;
    updatedAt: Date;

}

export interface ProductInquiry {
    order: string;
    page: number;
    limit: number;
    productCollection?: ProductCollection;
    search?: string;

} 