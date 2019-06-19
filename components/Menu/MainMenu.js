import Link from 'next/link';
import '../../styles/menu.scss';

const menuList = [
  { path: '', text: 'News Feed' },
  { path: 'board/notice', text: 'Notice' },
  { path: 'board/event', text: 'Event' },
  { path: 'rank', text: 'Rank' },
  //
  { path: 'test', text: 'Test' },
  { path: 'about', text: 'About' },
  { path: 'payment', text: 'Payment' },
  { path: 'product', text: 'Product' },
];
const MainMenu = () => (
  <ul className="main-menu-ul">
    {menuList.map(m =>
      <li key={m.text} className="main-menu-li">
        <Link href={`/${m.path}`}>
          <a>{m.text}</a>
        </Link>
      </li>
    )}
  </ul>
);


export default MainMenu;