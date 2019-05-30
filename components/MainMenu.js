import Link from 'next/link';
import {logout} from '../utils/auth';
import FBLogin from './Facebook/FBLogin';

const MainMenu = ({auth}) => (
  <ul>
    <li>
      <Link href="/about">
        <a>About Page</a>
      </Link>
    </li>
    <li>
      <Link href="/payment">
        <a>Payment Page</a>
      </Link>
    </li>
    <li>
      <Link href="/feed">
        <a>Feed Page</a>
      </Link>
    </li>
    <li>
      <Link href="/product">
        <a>Product Page</a>
      </Link>
    </li>
    {auth ?
      <li onClick={logout}><a>Logout</a></li>
      :
      <li>
        <FBLogin/>
      </li>
    }
  </ul>
);


export default MainMenu;