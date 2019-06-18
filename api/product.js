import { BaseRequest } from ".";

export const findProductById = id => BaseRequest.get(`product/${id}`);