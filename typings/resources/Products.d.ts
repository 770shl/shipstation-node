import { IProduct, IProductPaginationResult, IUpdateProductResponse } from '../models';
import Shipstation from '../shipstation';
import { BaseResource } from './Base';
export declare class Products extends BaseResource<IProduct> {
    protected shipstation: Shipstation;
    constructor(shipstation: Shipstation);
    getAll(opts?: object, authorizationToken?: string): Promise<IProductPaginationResult>;
    update(id: number, data: IProduct, authorizationToken?: string): Promise<IUpdateProductResponse>;
}
