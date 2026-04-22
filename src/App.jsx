import { BrowserRouter, Routes, Route } from "react-router-dom";

import Prismatic_ from "./pages/Prismatic_.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/contact.jsx";
import Pipeline_info from "./pages/Pipeline_info.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Prismatic_ />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/pipeline_info" element={<Pipeline_info />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
