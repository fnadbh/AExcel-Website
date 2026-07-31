import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Programmes from "./pages/Programmes";
import Resources from "./pages/Resources";
import AILiteracy from "./pages/AILiteracy";
import NewsInsights from "./pages/NewsInsights";
import Forum from "./pages/Forum";
import Contact from "./pages/Contact";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/programmes" element={<Programmes />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/ai-literacy" element={<AILiteracy />} />     
      <Route path="/news-insights" element={<NewsInsights/>} />     
      <Route path="/forum" element={<Forum />} />
      <Route path="/contact" element={<Contact />} />
    
    </Routes>
  );
}

export default App;