import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Gallery from "./pages/Gallery";
import WorkDetail from "./pages/WorkDetail";
import About from "./pages/About";

export default function App() {
  return (
    <Router basename="/my-portfolio">
      <Layout>
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/work/:id" element={<WorkDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}
