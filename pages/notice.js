import TopNav from '../components/Nav/TopNav';

const Notice = ({noticeId}) => {
  return (
    <div>
      <TopNav/>
      {noticeId}
    </div>
  );
};

Notice.getInitialProps = ({query}) => query;

export default Notice;