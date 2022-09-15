import "./App.css";
import { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Home } from "./screens/Home";
import { Contact } from "./components/Contact";
import { FoodDetail } from "./screens/FoodDetail";
import { NewLocation } from "./screens/NewLocation";
import Register from "./screens/Register";

export const AppContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("john")

  return (
    <div className="App">
      <AppContext.Provider value={{userName, setUserName}}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foods/:id" element={<FoodDetail />} />
        <Route path="/newFood" element={<NewLocation />} />
        {/* <Route path="/login" element={<NewLocation />} /> */}
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
