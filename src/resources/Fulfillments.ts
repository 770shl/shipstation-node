import { IFulfillment, IFulfillmentPaginationResult } from '../models'
import Shipstation, { RequestMethod } from '../shipstation'
import { BaseResource } from './Base'

export class Fulfillments extends BaseResource<IFulfillment> {
  constructor(protected shipstation: Shipstation) {
    super(shipstation, 'fulfillments')
  }

  public async getAll(
    opts?: object,
    authorizationToken?: string
  ): Promise<IFulfillmentPaginationResult> {
    const query = this.buildQueryStringFromParams(opts)
    const url = this.baseUrl + query

    const response = await this.shipstation.request({
      url,
      method: RequestMethod.GET,
      authorizationToken,
    })
    return response.data as IFulfillmentPaginationResult
  }
}
