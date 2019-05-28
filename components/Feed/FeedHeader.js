function FeedHeader({filter, text}){
  const [txt1, txt2] = text.split(' ');
  return(
    <div className="feed-header">
      {filter && <button onClick={filter}>필터</button>}<span>{txt1}</span>{' '}<span style={{color: 'grey'}}>{txt2}</span>
    </div>
  );
}

export default FeedHeader;