import React from "react";
import { Box } from "@mui/material";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import Footer from "./components/Footer";

const App: React.FC = () => {
    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
            <Header />
            <Box component="main" flexGrow={1} mt={8} mb={8}>
                <Hero />
            </Box>
            <Footer />
        </Box>
    );
};

export default App;
