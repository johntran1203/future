
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Nav } from './components/Nav';
import {Home} from './screens/Home'


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
  
    </div>
  );
}

export default App;
