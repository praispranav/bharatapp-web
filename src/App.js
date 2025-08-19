import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./home";
import PrivacyPolicy from "./privacyPolicy";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;
