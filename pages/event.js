import { findEvent } from '../api/board';
import BoardContent from '../components/Board/BoardContent';

const Event = ({eventId}) => <BoardContent findBoardData={findEvent} id={eventId} navCenter="이벤트"/>;

Event.getInitialProps = ({query}) => query;

export default Event;