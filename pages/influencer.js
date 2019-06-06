import TopNav from '../components/TopNav';
import TopNavBack from '../components/Nav/TopNavBack';

const Influencer = ({iid}) => {
  return (
    <div>
      <TopNav/>
      influencer {iid}
    </div>
  );
};

Influencer.getInitialProps = function ({query}) {
  const {iid} = query;
  return {iid};
};

export default Influencer;