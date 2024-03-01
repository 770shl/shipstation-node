import {
  IProduct,
  IProductPaginationResult,
  IUpdateProductResponse,
} from '../models'
import Shipstation, { RequestMethod } from '../shipstation'
import { BaseResource } from './Base'

export class Products extends BaseResource<IProduct> {
  constructor(protected shipstation: Shipstation) {
    super(shipstation, 'products')
  }

  public async getAll(
    opts?: object,
    authorizationToken?: string
  ): Promise<IProductPaginationResult> {
    const query = this.buildQueryStringFromParams(opts)
    const url = this.baseUrl + query

    const response = await this.shipstation.request({
      url,
      method: RequestMethod.GET,
      authorizationToken,
    })
    return response.data as IProductPaginationResult
  }

  // Updates an existing product.
  // This call does not currently support partial updates.
  // The entire resource must be provided in the body of the request.
  public async update(
    id: number,
    data: IProduct,
    authorizationToken?: string
  ): Promise<IUpdateProductResponse> {
    const url = `${this.baseUrl}/${id}`
    const response = await this.shipstation.request({
      url,
      method: RequestMethod.PUT,
      data,
      authorizationToken,
    })

    return response.data as IUpdateProductResponse
  }
}
