import { ICarrier } from '../models'
import Shipstation, { RequestMethod } from '../shipstation'
import { BaseResource } from './Base'

export class Carriers extends BaseResource<ICarrier> {
  constructor(protected shipstation: Shipstation) {
    super(shipstation, 'carriers')
  }

  public async getAll(authorizationToken?: string): Promise<ICarrier[]> {
    const url = this.baseUrl
    const response = await this.shipstation.request({
      url,
      method: RequestMethod.GET,
      authorizationToken,
    })
    return response.data as ICarrier[]
  }
}
