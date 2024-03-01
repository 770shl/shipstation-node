import { IOrderPaginationResult, IShipmentPaginationResult, ISubscribeToWebhookOpts, ISubscriptionResponse, IWebhook, IWebhookMessage, IWebhookResult } from '../models';
import Shipstation from '../shipstation';
import { BaseResource } from './Base';
export declare class Webhooks extends BaseResource<IWebhook> {
    protected shipstation: Shipstation;
    constructor(shipstation: Shipstation);
    getAll(authorizationToken?: string): Promise<IWebhookResult>;
    subscribe(data: ISubscribeToWebhookOpts, authorizationToken?: string): Promise<ISubscriptionResponse>;
    unsubscribe(id: number, authorizationToken?: string): Promise<null>;
    getResource(data: IWebhookMessage, authorizationToken?: string): Promise<IOrderPaginationResult | IShipmentPaginationResult>;
}
