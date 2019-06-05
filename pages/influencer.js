const Influencer = ({iid}) => {
  return (
    <div>influencer {iid}</div>
  );
};

Influencer.getInitialProps = function ({query}) {
  const {iid} = query;
  return {iid};
};

export default Influencer;