import './App.css';
import {BrowserRouter} from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';


import Certificate from './Certificate'

function App() {
  return (
    <div className="App">
      <h1>Hi Jabbar</h1>
      <BrowserRouter>
      
      <Routes>

      <Route path="certificate/:hi" element = {<Certificate/>}/>

      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
