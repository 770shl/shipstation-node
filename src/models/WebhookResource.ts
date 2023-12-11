import { WebhookEventType } from './Webhook'

export interface IWebhookResource {
  resource_type: WebhookEventType
  resource_url: string
}
