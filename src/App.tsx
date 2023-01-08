import "./App.scss";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Home/LandingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="search" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
