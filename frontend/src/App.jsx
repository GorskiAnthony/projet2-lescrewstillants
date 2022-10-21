import Home from "@pages/Home";
import { Routes, Route } from "react-router-dom";
import InfoMeal from "@pages/InfoMeal";
import Layout from "@pages/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<InfoMeal />} />
      </Routes>
    </Layout>
  );
}

export default App;
