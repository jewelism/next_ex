import {useState, useEffect} from 'react';
import BoardList from "../components/Board/BoardList";
import { findBoardListByType } from "../api/board";

const Board = ({boardType}) => {
  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    findBoardListByType(boardType)
      .then(list => setBoardList(list));
  }, []);

  return (
    <div>
      <BoardList type={boardType} list={boardList}/>
      {boardType}
    </div>
  );
};

Board.getInitialProps = ({query}) => query;

export default Board;