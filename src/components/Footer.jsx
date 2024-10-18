import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#2c3e50',
                color: '#fff',
                padding: '40px 20px',
                textAlign: 'center',
                marginTop: '40px',
            }}
        >
            <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
                <Grid item xs={12} md={4}>
                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                            fontWeight: 'bold',
                            marginBottom: '16px',
                        }}
                    >
                        About FABRICONS
                    </Typography>
                    <Typography variant="body2" sx={{ lineHeight: '1.8' }}>
                        FABRICONS is dedicated to providing the finest quality bed sheets that combine comfort, elegance, and sustainability. Our mission is to make your bed your sanctuary.
                    </Typography>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                            fontWeight: 'bold',
                            marginBottom: '16px',
                        }}
                    >
                        Quick Links
                    </Typography>
                    <Link
                        href="/"
                        sx={{
                            color: '#fff',
                            textDecoration: 'none',
                            display: 'block',
                            marginBottom: '8px',
                            '&:hover': { textDecoration: 'underline' },
                        }}
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        sx={{
                            color: '#fff',
                            textDecoration: 'none',
                            display: 'block',
                            marginBottom: '8px',
                            '&:hover': { textDecoration: 'underline' },
                        }}
                    >
                        About Us
                    </Link>
                    <Link
                        href="/products"
                        sx={{
                            color: '#fff',
                            textDecoration: 'none',
                            display: 'block',
                            marginBottom: '8px',
                            '&:hover': { textDecoration: 'underline' },
                        }}
                    >
                        Products
                    </Link>
                    <Link
                        href="/contact"
                        sx={{
                            color: '#fff',
                            textDecoration: 'none',
                            display: 'block',
                            marginBottom: '8px',
                            '&:hover': { textDecoration: 'underline' },
                        }}
                    >
                        Contact
                    </Link>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                            fontWeight: 'bold',
                            marginBottom: '16px',
                        }}
                    >
                        Contact Us
                    </Typography>
                    <Typography variant="body2" sx={{ lineHeight: '1.8' }}>
                        <br />
                        Email: ha5755420@gmail.com
                        <br />
                        Phone: +123 456 7890
                    </Typography>
                    <Typography variant="body2" sx={{ marginTop: '16px', lineHeight: '1.8' }}>
                        Follow Us:
                    </Typography>
                    <Box sx={{ marginTop: '8px', display: 'flex', justifyContent: 'center' }}>
                        <Link
                            href="https://www.linkedin.com/in/hamza-ali-b72b582ab"
                            target="_blank"
                            sx={{
                                color: '#FFD700',
                                textDecoration: 'none',
                                marginRight: '16px',
                                '&:hover': {
                                    color: '#0077b5',
                                },
                            }}
                        >
                            <LinkedInIcon />
                        </Link>
                        <Link
                            href="https://www.facebook.com/your-profile"
                            target="_blank"
                            sx={{
                                color: '#FFD700',
                                textDecoration: 'none',
                                marginRight: '16px',
                                '&:hover': {
                                    color: '#3b5998',
                                },
                            }}
                        >
                            <FacebookIcon />
                        </Link>
                        <Link
                            href="https://www.instagram.com/syed_hamza_228?igsh=bGtkNTBzd3hmc3dt"
                            target="_blank"
                            sx={{
                                color: '#FFD700',
                                textDecoration: 'none',
                                '&:hover': {
                                    color: '#c32aa3',
                                },
                            }}
                        >
                            <InstagramIcon />
                        </Link>
                    </Box>
                </Grid>
            </Grid>

            <Box mt={4}>
                <Typography
                    variant="body2"
                    sx={{
                        fontSize: '14px',
                        opacity: '0.8',
                        borderTop: '1px solid #777',
                        paddingTop: '20px',
                        marginTop: '20px',
                    }}
                >
                    &copy; {new Date().getFullYear()} FABRICONS. All Rights Reserved.
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
