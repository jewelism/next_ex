import Link from 'next/link';

const MainMenu = () => (
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
      <Link href="/product">
        <a>Product Page</a>
      </Link>
    </li>
    <li>
      <Link href="/test">
        <a>Test Page</a>
      </Link>
    </li>
  </ul>
);


export default MainMenu;