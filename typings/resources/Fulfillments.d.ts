import { IFulfillment, IFulfillmentPaginationResult } from '../models';
import Shipstation from '../shipstation';
import { BaseResource } from './Base';
export declare class Fulfillments extends BaseResource<IFulfillment> {
    protected shipstation: Shipstation;
    constructor(shipstation: Shipstation);
    getAll(opts?: object, authorizationToken?: string): Promise<IFulfillmentPaginationResult>;
}
