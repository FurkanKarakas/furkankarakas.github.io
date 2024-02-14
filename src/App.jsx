import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import Navbar from "./pages/Navbar.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./pages/Footer.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Tooltip } from "@mui/material";
import darkScrollbar from "@mui/material/darkScrollbar";
import { blueGrey } from "@mui/material/colors";
import NotFound from "./pages/NotFound.jsx";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ScrollTop from "./components/ScrollTop.jsx";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: blueGrey[900],
      paper: blueGrey[900],
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          ...darkScrollbar(),
          //scrollbarWidth for Firefox
          scrollbarWidth: "thin",
        },
      },
    },
  },
});

function App() {
  const location = useLocation();
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <span id="top-component"></span>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          overflowX: "clip",
          gap: 3,
        }}
      >
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        <Footer marginTop={"auto"} />
      </Box>
      <ScrollTop>
        <Tooltip title={"Scroll back to top"}>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </Tooltip>
      </ScrollTop>
    </ThemeProvider>
  );
}

export default App;
