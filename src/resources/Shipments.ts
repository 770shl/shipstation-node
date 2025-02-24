import {
  IShipment,
  IShipmentPaginationResult,
  IShippingRate,
  IShippingRateOptions,
} from '../models'
import Shipstation, { RequestMethod } from '../shipstation'
import { BaseResource } from './Base'

export class Shipments extends BaseResource<IShipment> {
  constructor(protected shipstation: Shipstation) {
    super(shipstation, 'shipments')
  }

  public async getAll(
    opts?: object,
    authorizationToken?: string
  ): Promise<IShipmentPaginationResult> {
    const query = this.buildQueryStringFromParams(opts)
    const url = this.baseUrl + query

    const response = await this.shipstation.request({
      url,
      method: RequestMethod.GET,
      authorizationToken,
    })
    return response.data as IShipmentPaginationResult
  }

  public async getRates(
    data?: IShippingRateOptions,
    authorizationToken?: string
  ): Promise<IShippingRate[]> {
    const url = this.baseUrl + '/getrates'

    const response = await this.shipstation.request({
      url,
      method: RequestMethod.POST,
      data,
      authorizationToken,
    })
    return response.data as IShippingRate[]
  }
}
