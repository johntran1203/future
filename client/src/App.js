
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Nav } from './components/Nav';
import { Home} from './screens/Home';
import { FoodDetail} from './screens/FoodDetail';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/foods/:id"  element={<FoodDetail/> }/>
      <Route path="/new-food" element={<Home />} />
      </Routes>
  
    </div>
  );
}

export default App;
