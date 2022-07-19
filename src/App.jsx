import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Reward from "./pages/Reward/Reward";
import Menu from "./pages/Menu/Menu";
import Signin from "./pages/Sigin/Signin";

function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="reward" element={<Reward />} />
          <Route path="giftcard" element={<div>giftcard</div>} />
          <Route path="/signin" element={<Signin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
