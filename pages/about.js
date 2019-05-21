import fetch from 'isomorphic-unfetch';
import EditableList from "../components/EditableList";
import {useState} from 'react';

function About({show}) {
  const [list, setList] = useState([{id: 1, text: '111'}, {id: 2, text: '222'}]);

  const onChangeList = (newList) => {
    setList(newList);
  }

  return (
    <div>
      <p>This is the about page</p>
      <div>{JSON.stringify(show)}</div>
      <hr/>
      <EditableList list={list} onChangeList={onChangeList}/>
    </div>
  )
}

About.getInitialProps = async function (context) {
  const {id} = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/975`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return {show}
};

export default About;