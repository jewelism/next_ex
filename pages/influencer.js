import {connect} from 'react-redux';
import {startClock} from '../store/actions/app';
import TopNav from '../components/Nav/TopNav';

import {INFLUENCER_ID} from '../constants/route';

const Influencer = ({influencerId}) => {
  return (
    <div>
      <TopNav/>
      influencer {influencerId}
    </div>
  );
};

Influencer.getInitialProps = ({query}) => ({influencerId: query[INFLUENCER_ID]});

const mapDispatchToProps = { startClock };
export default connect(null, mapDispatchToProps)(Influencer);