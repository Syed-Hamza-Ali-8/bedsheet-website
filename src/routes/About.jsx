import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
    return (
        <>
            <Navbar />
            <Box
                sx={{
                    padding: '40px',
                    backgroundColor: '#f3f3f3',
                    textAlign: 'center',
                    color: '#333',
                }}
            >
                <Grid container spacing={4} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <img
                            src="src/assets/maroon-bdsheet.jfif"
                            alt="About Us"
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '12px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h3"
                            gutterBottom
                            sx={{
                                fontWeight: 'bold',
                                color: '#2c3e50',
                                marginBottom: '20px',
                            }}
                        >
                            About Us
                        </Typography>
                        <Typography
                            variant="body1"
                            paragraph
                            sx={{
                                fontSize: '18px',
                                lineHeight: '1.8',
                                marginBottom: '16px',
                            }}
                        >
                            Welcome to <strong>FABRICONS</strong>, where comfort meets elegance! At FABRICONS, we believe that your bed isn't just a place to rest – it's a personal sanctuary. That's why we craft luxurious, high-quality bed sheets designed to elevate your sleeping experience.
                        </Typography>
                        <Typography
                            variant="body1"
                            paragraph
                            sx={{
                                fontSize: '18px',
                                lineHeight: '1.8',
                                marginBottom: '16px',
                            }}
                        >
                            Our journey began with a simple goal: to provide premium, eco-friendly fabrics that blend beauty with sustainability. Every sheet we create is made from the finest materials, ensuring breathability, softness, and durability that lasts.
                        </Typography>
                    </Grid>
                </Grid>

                <Box mt={4}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 'bold',
                            color: '#2980b9',
                            marginBottom: '20px',
                        }}
                    >
                        Why Choose FABRICONS?
                    </Typography>
                    <ul style={{ listStyleType: 'none', padding: '0', textAlign: 'left', display: 'inline-block' }}>
                        <li
                            style={{
                                marginBottom: '10px',
                                fontSize: '18px',
                                color: '#2c3e50',
                            }}
                        >
                            Exceptional Quality: We handpick the softest, most durable fabrics for ultimate comfort.
                        </li>
                        <li
                            style={{
                                marginBottom: '10px',
                                fontSize: '18px',
                                color: '#2c3e50',
                            }}
                        >
                            Eco-Friendly: Sustainability is at the heart of everything we do. Our sheets are made with environmentally conscious methods.
                        </li>
                        <li
                            style={{
                                marginBottom: '10px',
                                fontSize: '18px',
                                color: '#2c3e50',
                            }}
                        >
                            Custom Designs: Unique patterns and colors that bring your space to life.
                        </li>
                        <li
                            style={{
                                marginBottom: '10px',
                                fontSize: '18px',
                                color: '#2c3e50',
                            }}
                        >
                            Customer Satisfaction: Your happiness is our priority. We’re here to help, every step of the way.
                        </li>
                    </ul>
                </Box>
            </Box>
            <Footer />
        </>
    );
};

export default About;
