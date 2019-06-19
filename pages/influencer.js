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

export default Influencer;