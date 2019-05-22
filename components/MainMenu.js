import Link from "next/link";
import {logout} from "../utils/auth";
import FBLogin from "./Facebook/FBLogin";

const MainMenu = ({auth}) => (
  <ul>
    <li>
      <Link href="/about">
        <a>About Page</a>
      </Link>
    </li>
    {auth ?
      <li onClick={logout}><a>Logout</a></li>
      :
      <li>
        <FBLogin/>
        {/*<Link href="/login">*/}
        {/*  <a>Login Page</a>*/}
        {/*</Link>*/}
      </li>
    }
    <li>
      {auth}
    </li>
  </ul>
);



export default MainMenu;