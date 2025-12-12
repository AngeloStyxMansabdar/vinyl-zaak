import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Detail from "./pages/Detail";
import Community from "./pages/Community";
import "./App.css";

const App = () => {
  return (
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/community" element={<Community />} />
          {/*<Route path="/overons" element={<OverOns />} />*/}
          {/*<Route path="/contact" element={<Contact />} />*/}
        </Routes>
      </BrowserRouter>
  );
};

export default App;
