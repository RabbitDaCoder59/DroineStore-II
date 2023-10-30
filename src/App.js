import Home from "../src/Containers/Home/Home";
import "../src/Assets/Styles/global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Laptop" element={<Home />} />
        <Route path="/accessories" element={<Home />} />
        <Route path="/newArrival" element={<Home />} />
        <Route path="/User" element={<Home />} />
        <Route path="/Contact" element={<Home />} />
        <Route path="/Phones" element={<Home />} />
        <Route path="/Carts" element={<Home />} />
        <Route path="/category" element={<Home />} />
        <Route path="/Shop" element={<Home />} />
        <Route path="/todaysDeal" element={<Home />} />
        <Route path="/Shop/Android" element={<Home />} />
        <Route path="/Shop/Iphone" element={<Home />} />
        <Route path="/Shop/MacBook" element={<Home />} />
        <Route path="/Shop/PowerBank" element={<Home />} />
        <Route path="/Shop/Windows" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
