import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { PuppyPage } from "./components/PuppyPage";
import { SearchPage } from "./components/SearchPage";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/puppy/:id" element={<PuppyPage/>}></Route>
        <Route path="/search" element={<SearchPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
