import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import AboutMe from "./pages/AboutMe";
import Highlights from "./pages/Highlights";
import Portfolio from "./pages/Portfolio";

const App: React.FC = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Header />
            <Container component="main" maxWidth="lg" sx={{ flexGrow: 1, py: { xs: 5, md: 8 } }}>
                <Stack spacing={{ xs: 6, md: 8 }}>
                    <Hero />
                    <AboutMe />
                    <Highlights />
                    <Portfolio />
                </Stack>
            </Container>
            <Footer />
        </Box>
    );
};

export default App;
