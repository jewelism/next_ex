import TopNav from '../components/Nav/TopNav';

const Event = ({eventId}) => {
  return (
    <div>
      <TopNav/>
      {eventId}
    </div>
  );
};

Event.getInitialProps = ({query}) => query;

export default Event;