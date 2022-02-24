import { Route, Routes } from "react-router-dom";
import BetterCoin from "./pages/BetterCoin";
import Home from "./pages/Home";


const App = function () {
  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/better-coin" element={<BetterCoin />} />
    </Routes>
  );
};

export default App;
