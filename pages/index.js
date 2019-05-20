import Link from 'next/link';

const Index = () => (
  <div>
    <Link href="/about">
      <a>About Page</a>
    </Link>
    <Link href="/login">
      <a>Login Page</a>
    </Link>
    <p>vn shop</p>
  </div>
);

export default Index;