import MainMenu from "../components/MainMenu";

const Index = ({auth}) => {
  return (
    <div>
      <h1>vn shop</h1>
      <MainMenu auth={auth}/>
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