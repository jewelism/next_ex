import { BaseRequest } from ".";

export const findBoardListByType = boardType => String(boardType).includes('noti') ? findNoticeList() : findEventList();

const findNoticeList = () => BaseRequest.get('notice');
const findEventList = () => BaseRequest.get('event');

export const findNotice = id => BaseRequest.get(`notice/${id}`);
export const findEvent = id => BaseRequest.get(`event/${id}`);