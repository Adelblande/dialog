import { FC } from "react";
import GlobalStyles from "./GlobalStyles";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { Routes, Route } from "react-router-dom";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <GlobalStyles />
    </Routes>
  );
};

export default App;
