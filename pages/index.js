import "react-responsive-carousel/lib/styles/carousel.min.css";
import MainMenu from "../components/MainMenu";
import Carousel from '../components/Carousel';

const Index = ({auth}) => {
  return (
    <div>
      <h1>vn shop</h1>
      <MainMenu auth={auth}/>
      <hr/>
      {auth &&
      <>
        <div>{JSON.parse(auth).expiresIn}</div>
        <div>{auth}</div>
      </>
      }
      <Carousel width="700px"/>
    </div>
  );
};

Index.getInitialProps = async function ({req}) {
  const auth = req && req.cookies && req.cookies.auth;

  // const {id} = context.query
  // const res = await fetch(`https://api.tvmaze.com/shows/975`)
  // const show = await res.json()
  //
  // // console.log(`Fetched show: ${show.name}`)

  return {auth};
};

export default Index;