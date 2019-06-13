import CategoryMenu from '../components/Menu/CategoryMenu';
import TopNav from '../components/Nav/TopNav';

const WithCategory = ({children, nav}) => {
  return (
    <>
      {nav}
      <div className="for-overlay">
        <CategoryMenu/>
        {children}
      </div>
    </>
  );
};

export default WithCategory;