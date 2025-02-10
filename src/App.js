import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Main/HomePage";
import LayoutPage from "./components/Layouts/LayoutPage";
import ProductDetail from "./components/Main/ProductDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />

          {/* Thêm các route con nếu có */}
          <Route path="/product/:id" element={<ProductDetail/>} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
