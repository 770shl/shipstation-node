export declare enum RequestMethod {
    GET = "GET",
    POST = "POST",
    DELETE = "DELETE",
    PUT = "PUT"
}
export interface IShipstationRequestOptions {
    url: string;
    method?: RequestMethod;
    useBaseUrl?: boolean;
    data?: any;
    authorizationToken?: string;
}
export interface IShipstationOptions {
    apiKey?: string;
    apiSecret?: string;
}
export default class Shipstation {
    authorizationToken: string;
    private baseUrl;
    constructor(options?: IShipstationOptions);
    request: ({ url, method, useBaseUrl, data, authorizationToken, }: IShipstationRequestOptions) => Promise<import("axios").AxiosResponse<any>>;
}
