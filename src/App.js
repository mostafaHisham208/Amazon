import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Sign from "./Pages/Sign/Sign";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/sign" element={<Sign/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
