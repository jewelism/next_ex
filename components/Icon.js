export default function Icon({children, type='svg', ...props}){
  return (
    <img src={`/static/icon/${children}.${type}`} {...props}/>
  );
}