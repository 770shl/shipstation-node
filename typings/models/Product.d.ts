import { IPaginatedResult } from './Pagination';
export interface IProduct {
    productId: number;
    sku: string;
    name: string;
    price: number;
    defaultCost: number;
    length: number;
    width: number;
    height: number;
    weightOz: number;
    internalNotes: string;
    fulfillmentSku: string;
    createDate: string;
    modifyDate: string;
    active: boolean;
    productCategory: IProductCategory;
    productType: string;
    warehouseLocation: string;
    defaultCarrierCode: string;
    defaultServiceCode: string;
    defaultPackageCode: string;
    defaultIntlCarrierCode: string;
    defaultIntlServiceCode: string;
    defaultIntlPackageCode: string;
    defaultConfirmation: string;
    defaultIntlConfirmation: string;
    customsDescription: string;
    customsValue: number;
    customsTariffNo: string;
    customsCountryCode: string;
    noCustoms: boolean;
    tags: IProductTag[];
}
export interface IProductCategory {
    categoryId: number;
    name: string;
}
export interface IProductTag {
    tagId: number;
    name: string;
}
export interface IUpdateProductResponse {
    success: boolean;
    message: string;
}
export interface IProductPaginationResult extends IPaginatedResult {
    products: IProduct[];
}
