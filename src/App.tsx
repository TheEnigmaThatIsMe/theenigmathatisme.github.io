import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

const App: React.FC = () => {
    return (
        <Router>
            <Box display="flex" flexDirection="column" minHeight="100vh">
                <Header />
                <Box component="main" flexGrow={1} mt={8} mb={8}>
                    <Routes>
                        <Route path="/" element={<Hero />} />
                    </Routes>
                </Box>
                <Footer />
            </Box>
        </Router>
    );
};

export default App;
