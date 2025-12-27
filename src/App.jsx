import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Template from "./components/sections/Template";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout Route */}
        <Route element={<Template />}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Fallback */}

      </Routes>
    </BrowserRouter>
  );
};

export default App;
