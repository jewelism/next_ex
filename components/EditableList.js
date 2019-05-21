import {List} from 'immutable';

const EditableList = ({list = [], onChangeList}) => {
  const newList = List(list);
  const onClickDelete = id => onChangeList(newList.splice(newList.findIndex(item => item.id === id), 1).toArray());
  return list.map(item => <div onClick={() => onClickDelete(item.id)} key={item.id}>{item.text}</div>);
};

export default EditableList;