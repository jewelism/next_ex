import TopNav from '../Nav/TopNav.js';
import Icon from '../Icon';

function BoardList({ list, type }) {
  const onClickItem = () => Router.push(`/${type}/${id}`);

  return (
    <div>
      <TopNav />
      <div>
        {list.map(item =>
          <div key={item.id} onClick={onClickItem}>
            <div>
              <div>
                {item.title}
              </div>
              <div>
                {item.date}
              </div>
            </div>
            <Icon>btn_arrow_right</Icon>
          </div>
        )}
      </div>
    </div>
  );
}

export default BoardList;