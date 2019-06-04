import CategoryMenu from '../components/CategoryMenu';
import TopNav from '../components/TopNav';

const WithCategory = ({children}) => {
  return (
    <>
      <TopNav/>
      <CategoryMenu/>
      {children}
    </>
  );
};

export default WithCategory;