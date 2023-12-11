import {
  IOrderPaginationResult,
  IShipmentPaginationResult,
  IWebhookResource,
} from '../models'
import Shipstation, { RequestMethod } from '../shipstation'
import { BaseResource } from './Base'

export class WebhookResource extends BaseResource<IWebhookResource> {
  constructor(protected shipstation: Shipstation) {
    super(shipstation, 'webhookResource')
  }

  public async getResource(
    data: IWebhookResource
  ): Promise<IOrderPaginationResult | IShipmentPaginationResult> {
    const response = await this.shipstation.request({
      url: data.resource_url,
      method: RequestMethod.GET,
    })

    switch (data.resource_type) {
      case 'ORDER_NOTIFY' || 'ORDER_NOTIFY_TEST':
        return response.data as IOrderPaginationResult
      case 'SHIP_NOTIFY' || 'ITEM_SHIP_NOTIFY':
        return response.data as IShipmentPaginationResult
      default:
        return response.data
    }
  }
}
