import {useState} from 'react';
import Scrollspy from 'react-scrollspy';

function SideNavItem({text, hash, active}) {
  return (
    <div>
      <a href={'#' + hash}>{active && '선택된거!@'} {text}</a>
    </div>
  );
}

function SideNav() {
  const [activeId, setActiveId] = useState(null);
  const navList = [
    {id: 'product-info', text: '상품정보'},
    {id: 'product-size', text: '사이즈'},
    {id: 'product-qna', text: 'Q&A'},
  ];

  function onUpdate(el) {
    el && setActiveId(el.id);
  }

  return (
    <div>
      <style>{`
        .side-nav {
          position: fixed;
          top: 7rem;
          right: 0.5rem;
        }
      `}</style>
      <div className="side-nav">
        <Scrollspy items={navList.map(n => n.id)} onUpdate={onUpdate}>
          {navList.map(nav => <SideNavItem key={nav.id} text={nav.text} hash={nav.id} active={nav.id === activeId}/>)}
          {/*<SideNavItem text="리뷰" hash="product-review"/>*/}
          {/*<SideNavItem text="마켓정보" hash="product-market-info"/>*/}
        </Scrollspy>
      </div>
    </div>
  );
}

export default SideNav;