import Request from './Request';

const env = 'test';
const BASE_URL = env === 'live' ? '' : env === 'test' ? 'https://inseongj1.moqa.co.kr' : 'https://localhost:8080';

export const BaseRequest = new Request(`${BASE_URL}`);

export const findFeedList = pageNum => BaseRequest.get('page/' + pageNum);