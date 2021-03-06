import Request from './Request';

const env = 'test';
export const BASE_URL = env === 'live' ? 'https://api.sprout.cool' : env === 'test' ? 'https://inseongj1.moqa.co.kr' : 'https://localhost:8080';
export const SHOPEE_URL = 'https://shopee.ph/api/v2';

export const BaseRequest = new Request(BASE_URL);
export const ShopeeRequest = new Request(SHOPEE_URL);

export const findFeedList = pageNum => BaseRequest.get('page/' + pageNum);

export const findReview = () => ShopeeRequest.get('item/get_ratings?filter=0&flag=1&itemid=1317441252&limit=6&offset=0&shopid=76225397&type=0');