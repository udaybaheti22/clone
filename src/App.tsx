import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import AadhaarCard from "@/pages/AadhaarCard";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aadhaar" element={<AadhaarCard />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
