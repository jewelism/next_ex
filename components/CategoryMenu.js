import {useState} from 'react';
import HorizontalScroll from 'react-horizontal-scrolling-menu';

const MenuItem = ({text, selected}) => <div className={`category-menu-item ${selected ? 'active' : ''}`}>{text}</div>;
const Menu = (list, selected) => list.map(({name}) => <MenuItem text={name} key={name} selected={selected}/>);

function CategoryMenu() {
  const [selected, setSelected] = useState('Today');
  const onSelect = v => setSelected(v);
  return (
    <div className="category-menu">
      <HorizontalScroll data={
        Menu([
          {name: 'Today'},
          {name: 'Outer'},
          {name: 'Top'},
          {name: 'Skirt'},
          {name: 'Pants'},
          {name: 'Dress'},
          {name: 'Shoes'},
          {name: 'item8'},
          {name: 'item9'},
          {name: 'item10'},
          {name: 'item11'},
          {name: 'item12'},
          {name: 'item13'},
          {name: 'item14'},
          {name: 'item15'}
        ], selected)
      } onSelect={onSelect} selected={selected} hideArrows hideSingleArrow inertiaScrolling />
    </div>
  );
}

export default CategoryMenu;