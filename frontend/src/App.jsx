import Home from "@pages/Home";
import { Routes, Route } from "react-router-dom";
import InfoMeal from "@pages/InfoMeal";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<InfoMeal />} />
    </Routes>
  );
}

export default App;
