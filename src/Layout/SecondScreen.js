import { useLocation, useParams } from 'react-router-dom';

function SecondScreen() {
  const { names } = useParams();
  const location = useLocation();

  return (
    <div>
      <p>{location.state.id}</p>
      <h1>{location.state.name}</h1>
      <p>I am Jharna</p>
    </div>
  )
}

export default SecondScreen
