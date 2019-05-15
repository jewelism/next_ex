import fetch from 'isomorphic-unfetch';

function About({show}) {
  return (
    <div>
      <p>This is the about page</p>
      <div>{JSON.stringify(show)}</div>
    </div>
  )
}

About.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/975`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
};

export default About;