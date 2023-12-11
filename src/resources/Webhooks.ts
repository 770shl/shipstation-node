import {
  IOrderPaginationResult,
  IShipmentPaginationResult,
  ISubscribeToWebhookOpts,
  ISubscriptionResponse,
  IWebhook,
  IWebhookMessage,
  IWebhookResult,
} from '../models'
import Shipstation, { RequestMethod } from '../shipstation'
import { BaseResource } from './Base'

export class Webhooks extends BaseResource<IWebhook> {
  constructor(protected shipstation: Shipstation) {
    super(shipstation, 'webhooks')
  }

  public async getAll(): Promise<IWebhookResult> {
    const url = this.baseUrl
    const response = await this.shipstation.request({
      url,
      method: RequestMethod.GET,
    })
    return response.data as IWebhookResult
  }

  public async subscribe(
    data: ISubscribeToWebhookOpts
  ): Promise<ISubscriptionResponse> {
    const url = `${this.baseUrl}/subscribe`
    const response = await this.shipstation.request({
      url,
      method: RequestMethod.POST,
      data,
    })
    return response.data as ISubscriptionResponse
  }

  public async unsubscribe(id: number): Promise<null> {
    const url = `${this.baseUrl}/${id}`
    await this.shipstation.request({
      url,
      method: RequestMethod.DELETE,
    })

    return null
  }

  public async getResource(
    data: IWebhookMessage
  ): Promise<IOrderPaginationResult | IShipmentPaginationResult> {
    const response = await this.shipstation.request({
      url: data.resource_url,
      method: RequestMethod.GET,
      useBaseUrl: false,
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
