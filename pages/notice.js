import { findNotice } from '../api/board';
import BoardContent from '../components/Board/BoardContent';

const Notice = ({noticeId}) => <BoardContent findBoardData={findNotice} id={noticeId} navCenter="공지사항"/>;

Notice.getInitialProps = ({query}) => query;

export default Notice;