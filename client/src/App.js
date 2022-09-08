import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Home } from "./screens/Home";
import { Contact } from "./components/Contact";
import { FoodDetail } from "./screens/FoodDetail";
import { NewLocation } from "./screens/NewLocation";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foods/:id" element={<FoodDetail />} />
        <Route path="/newFood" element={<NewLocation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
    </div>
  );
}

export default App;
