import Home from "@pages/Home";
import { Routes, Route } from "react-router-dom";
import InfoMeal from "@pages/InfoMeal";
import Layout from "@pages/Layout";
import FavMeal from "@pages/FavMeal";
import Random from "@pages/Random";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<InfoMeal />} />
        <Route path="/favorites" element={<FavMeal />} />
        <Route path="/random" element={<Random />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Layout>
  );
}

export default App;
