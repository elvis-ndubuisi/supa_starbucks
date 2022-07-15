import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="menu" element={<div>menu</div>} />
          <Route path="reward" element={<div>reward</div>} />
          <Route path="giftcard" element={<div>giftcard</div>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
