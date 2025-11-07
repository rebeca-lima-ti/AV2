import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import HomeAdm from "./pages/HomeAdm";
import HomeEngOpe from "./pages/HomeEngOpe";
import Funcionarios from "./pages/Funcionarios";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/homeadm" element={<HomeAdm />} />
        <Route path="/homeengope" element={<HomeEngOpe />} />
        <Route path="/funcionarios" element={<Funcionarios />} />
      </Routes>
    </Router>
  );
}

export default App;
