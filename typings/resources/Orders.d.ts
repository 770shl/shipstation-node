import { ICreateOrUpdateOrder, ICreateOrUpdateOrderBulkResponse, IOrder, IOrderPaginationResult, ICreateLabel, ICreateLabelResponse } from '../models';
import Shipstation from '../shipstation';
import { BaseResource } from './Base';
export declare class Orders extends BaseResource<IOrder> {
    protected shipstation: Shipstation;
    constructor(shipstation: Shipstation);
    getAll(opts?: object, authorizationToken?: string): Promise<IOrderPaginationResult>;
    createOrUpdate(data: ICreateOrUpdateOrder, authorizationToken?: string): Promise<IOrder>;
    createOrUpdateBulk(data: ICreateOrUpdateOrder[], authorizationToken?: string): Promise<ICreateOrUpdateOrderBulkResponse>;
    createLabel(data: ICreateLabel, authorizationToken?: string): Promise<ICreateLabelResponse>;
}
