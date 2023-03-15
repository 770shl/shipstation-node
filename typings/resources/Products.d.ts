import { IProduct, IProductPaginationResult, IUpdateProductResponse } from '../models';
import Shipstation from '../shipstation';
import { BaseResource } from './Base';
export declare class Products extends BaseResource<IProduct> {
    protected shipstation: Shipstation;
    constructor(shipstation: Shipstation);
    getAll(opts?: object): Promise<IProductPaginationResult>;
    update(id: number, data: IProduct): Promise<IUpdateProductResponse>;
}
