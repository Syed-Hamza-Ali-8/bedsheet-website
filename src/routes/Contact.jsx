import React from 'react';
import { Box, Grid, Typography, TextField, Button, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <>
            <Navbar />
            <Box
                sx={{
                    backgroundColor: '#f5f5f5',
                    padding: '40px',
                    textAlign: 'center',
                    minHeight: '80vh',
                }}
            >
                <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', marginBottom: '30px' }}>
                    Contact Us
                </Typography>

                <Grid container spacing={4} sx={{ justifyContent: 'center', marginBottom: '40px' }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
                            We'd love to hear from you!
                        </Typography>
                        <form>
                            <TextField
                                fullWidth
                                label="Your Name"
                                variant="outlined"
                                sx={{ marginBottom: '16px' }}
                                required
                            />
                            <TextField
                                fullWidth
                                label="Your Email"
                                variant="outlined"
                                sx={{ marginBottom: '16px' }}
                                required
                                type="email"
                            />
                            <TextField
                                fullWidth
                                label="Subject"
                                variant="outlined"
                                sx={{ marginBottom: '16px' }}
                                required
                            />
                            <TextField
                                fullWidth
                                label="Message"
                                multiline
                                rows={4}
                                variant="outlined"
                                sx={{ marginBottom: '24px' }}
                                required
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{
                                    backgroundColor: '#2c3e50',
                                    '&:hover': { backgroundColor: '#1a242f' },
                                }}
                                type="submit"
                            >
                                Send Message
                            </Button>
                        </form>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
                            Our Contact Information
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                textAlign: 'left',
                                gap: '16px',
                                padding: '20px',
                                backgroundColor: '#ffffff',
                                borderRadius: '8px',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <LocationOnIcon sx={{ marginRight: '8px', color: '#2c3e50' }} />
                                <Typography variant="body1">Karachi</Typography>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <PhoneIcon sx={{ marginRight: '8px', color: '#2c3e50' }} />
                                <Typography variant="body1">+123 456 7890</Typography>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <EmailIcon sx={{ marginRight: '8px', color: '#2c3e50' }} />
                                <Typography variant="body1">ha5755420@gmail.com</Typography>
                            </Box>

                            <Typography variant="body1" sx={{ marginTop: '20px', fontWeight: 'bold' }}>
                                Follow Us:
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
                                <Link
                                    href="https://www.linkedin.com/in/hamza-ali-b72b582ab"
                                    target="_blank"
                                    sx={{
                                        color: '#2c3e50',
                                        '&:hover': { color: '#0077b5' },
                                    }}
                                >
                                    <LinkedInIcon fontSize="large" />
                                </Link>
                                <Link
                                    href="https://www.facebook.com/YOUR_FACEBOOK_PROFILE"
                                    target="_blank"
                                    sx={{
                                        color: '#2c3e50',
                                        '&:hover': { color: '#3b5998' },
                                    }}
                                >
                                    <FacebookIcon fontSize="large" />
                                </Link>
                                <Link
                                    href="https://www.instagram.com/syed_hamza_228?igsh=bGtkNTBzd3hmc3dt"
                                    target="_blank"
                                    sx={{
                                        color: '#2c3e50',
                                        '&:hover': { color: '#c32aa3' },
                                    }}
                                >
                                    <InstagramIcon fontSize="large" />
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </>
    );
};

export default Contact;
