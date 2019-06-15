import BoardList from "../components/Board/BoardList";

const Board = ({type}) => {
  return (
    <div>
      <BoardList type={type} list={[]}/>
      {type}
    </div>
  );
};

Board.getInitialProps = ({query}) => query;

export default Board;