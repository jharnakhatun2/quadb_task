import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FirstScreen from './Layout/FirstScreen';
import SecondScreen from './Layout/SecondScreen';

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<FirstScreen/>}/>
        <Route path="/:name" element={<SecondScreen/>}/>       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
