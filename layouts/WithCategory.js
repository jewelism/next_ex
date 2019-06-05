import CategoryMenu from '../components/CategoryMenu';
import TopNav from '../components/TopNav';

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