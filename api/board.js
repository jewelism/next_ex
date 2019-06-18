import Request from './Request';

const env = 'test';
const BASE_URL = env === 'live' ? '' : env === 'test' ? 'https://inseongj1.moqa.co.kr' : 'https://localhost:8080';

export const BaseRequest = new Request(`${BASE_URL}`);

export const findBoardListByType = boardType => String(boardType).includes('noti') ? findNoticeList() : findEventList();

const findNoticeList = () => BaseRequest.get('notice');
const findEventList = () => BaseRequest.get('event');

export const findNotice = id => BaseRequest.get(`notice/${id}`);
export const findEvent = id => BaseRequest.get(`event/${id}`);