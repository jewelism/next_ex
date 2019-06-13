import MainMenu from '../components/MainMenu';
import '../styles/menu.scss';
import StarInfluencer from '../components/Feed/StarInfluencer';

const Test = ({auth}) => {
  return (
    <div>
      <h1>vn shop</h1>
      <div className="font-test">font-test</div>
      <MainMenu auth={auth}/>
      <hr/>
      {auth &&
      <>
        <div>{JSON.parse(auth).expiresIn}</div>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>{auth}</div>
      </>
      }
      <StarInfluencer list={[
        {id: 1, name: 'boseok11', followed: true, followCount: 111},
        {id: 2, name: 'boseok22', followed: true, followCount: 222},
        {id: 3, name: 'boseok33', followed: true, followCount: 333},
      ]}/>
    </div>
  );
};

Test.getInitialProps = async function ({req}) {
  const auth = req && req.cookies && req.cookies.auth;

  // const {id} = context.query
  // const res = await fetch(`https://api.tvmaze.com/shows/975`)
  // const show = await res.json()
  //
  // // console.log(`Fetched show: ${show.name}`)

  return {auth};
};

export default Test;