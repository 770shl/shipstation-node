import { IOrderPaginationResult, IShipmentPaginationResult, IWebhookResource } from '../models';
import Shipstation from '../shipstation';
import { BaseResource } from './Base';
export declare class WebhookResource extends BaseResource<IWebhookResource> {
    protected shipstation: Shipstation;
    constructor(shipstation: Shipstation);
    getResource(data: IWebhookResource): Promise<IOrderPaginationResult | IShipmentPaginationResult>;
}
