import {connect} from 'react-redux';
import {startClock} from '../store/actions/app';
import TopNav from '../components/Nav/TopNav';

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


const mapDispatchToProps = { startClock };
export default connect(null, mapDispatchToProps)(Influencer);