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

  public async getAll(authorizationToken?: string): Promise<IWebhookResult> {
    const url = this.baseUrl
    const response = await this.shipstation.request({
      url,
      method: RequestMethod.GET,
      authorizationToken,
    })
    return response.data as IWebhookResult
  }

  public async subscribe(
    data: ISubscribeToWebhookOpts,
    authorizationToken?: string
  ): Promise<ISubscriptionResponse> {
    const url = `${this.baseUrl}/subscribe`
    const response = await this.shipstation.request({
      url,
      method: RequestMethod.POST,
      data,
      authorizationToken,
    })
    return response.data as ISubscriptionResponse
  }

  public async unsubscribe(
    id: number,
    authorizationToken?: string
  ): Promise<null> {
    const url = `${this.baseUrl}/${id}`
    await this.shipstation.request({
      url,
      method: RequestMethod.DELETE,
      authorizationToken,
    })

    return null
  }

  public async getResource(
    data: IWebhookMessage,
    authorizationToken?: string
  ): Promise<IOrderPaginationResult | IShipmentPaginationResult> {
    const response = await this.shipstation.request({
      url: data.resource_url,
      method: RequestMethod.GET,
      useBaseUrl: false,
      authorizationToken,
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
