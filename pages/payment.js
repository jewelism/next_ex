import {useState} from 'react';
import Head from 'next/head';

const Payment = () => {
  const [loaded, setLoaded] = useState(false);

  const onClick = () => setLoaded(!loaded);

  return (
    <div>
      <Head>
        <title>Payment</title>
      </Head>
      <h1>Payment</h1>
      <div>MOMO Pay</div>
      <div>무통장입금</div>
      <div onClick={onClick}>click</div>
      {loaded && <div>ok!</div>}
    </div>
  );
};
export default Payment;