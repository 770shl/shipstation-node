import { AxiosResponse } from 'axios'

import * as Models from './models'
import { Carriers } from './resources/Carriers'
import { Fulfillments } from './resources/Fulfillments'
import { Orders } from './resources/Orders'
import { Products } from './resources/Products'
import { Shipments } from './resources/Shipments'
import { Stores } from './resources/Stores'
import { Warehouses } from './resources/Warehouses'
import { Webhooks } from './resources/Webhooks'
import Shipstation, {
  IShipstationRequestOptions,
  IShipstationOptions,
  RequestMethod,
} from './shipstation'
import { WebhookResource } from './resources/WebhookResource'

export default class ShipStationAPI {
  private ss: Shipstation

  public orders: Orders
  public carriers: Carriers
  public fulfillments: Fulfillments
  public stores: Stores
  public shipments: Shipments
  public warehouses: Warehouses
  public webhooks: Webhooks
  public products: Products
  public webhooksResource: WebhookResource
  public request: (
    args: IShipstationRequestOptions
  ) => Promise<AxiosResponse<any>>

  constructor(options?: IShipstationOptions) {
    this.ss = new Shipstation(options)

    this.orders = new Orders(this.ss)
    this.carriers = new Carriers(this.ss)
    this.fulfillments = new Fulfillments(this.ss)
    this.stores = new Stores(this.ss)
    this.shipments = new Shipments(this.ss)
    this.warehouses = new Warehouses(this.ss)
    this.webhooks = new Webhooks(this.ss)
    this.products = new Products(this.ss)
    this.webhooksResource = new WebhookResource(this.ss)
    this.request = this.ss.request
  }
}

export { Models, IShipstationRequestOptions, RequestMethod }
