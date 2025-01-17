import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

const App: React.FC = () => {
    return (
        <Router>
            <Box display="flex" flexDirection="column" minHeight="100vh">
                <Header />
                <Box component="main" flexGrow={1}>
                    <Routes>
                        <Route path="/" element={<Hero />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Box>
                <Footer />
            </Box>
        </Router>
    );
};

export default App;
