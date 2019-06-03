import {useState} from 'react';
import HorizontalScroll from 'react-horizontal-scrolling-menu';

const MenuItem = ({text, selected}) => <div className={`menu-item ${selected ? 'active' : ''}`}>{text}</div>;
const Menu = (list, selected) => list.map(({name}) => <MenuItem text={name} key={name} selected={selected}/>);

function CategoryMenu() {
  const [selected, setSelected] = useState('item1');
  const onSelect = v => setSelected(v);
  return (
    <HorizontalScroll data={
      Menu([
        {name: 'item1'},
        {name: 'item2'},
        {name: 'item3'},
        {name: 'item4'},
        {name: 'item5'},
        {name: 'item6'},
        {name: 'item7'},
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
  );
}

export default CategoryMenu;