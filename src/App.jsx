import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog.jsx";
import Galeria from "./pages/Galeria/Galeria";
import Contato from "./pages/Contato/Contato";
import Header from "./components/Header";
import { Box } from "@mui/material";
import "./styles/global.css";

export default function App() {
  return (
    <>
      <Header />
      <Box
        sx={{
          mt: { xs: 6, md: 8 },
        }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Box>
    </>
  );
}
