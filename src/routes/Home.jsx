import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cart from './Cart';
import blackRedCombo from "../hot-collection-bdsheets/blackRedComboBdsheet.jpeg"

const hotBedsheetsCollection = [
    { id: 1, src: blackRedCombo, alt: 'Hot Bed Sheet 1', name: 'Black-Red' },
    // { id: 2, src: , alt: 'Hot Bed Sheet 2', name: 'Golden' },
    // { id: 3, src: creamBrownBdsheet, alt: 'Hot Bed Sheet 3', name: 'Cream-Brown' },
    // { id: 4, src: darkPurpleBdsheet, alt: 'Hot Bed Sheet 4', name: 'Dark-Purple' },
    // { id: 5, src: lightYellowBdsheet, alt: 'Hot Bed Sheet 5', name: 'Light-Yellow' },
];

const Home = () => {
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: false,
        arrows: true,
    };

    const handleAddToCart = (item) => {
        if (!cart.find((cartItem) => cartItem.id === item.id)) {
            setCart([...cart, item]);
            alert(`Bed Sheet color: ${item.name} added to cart!`);
        }
    };

    const handleRemoveFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
        alert('Bed Sheet removed from cart!');
    };

    return (
        <>
            <Box sx={{ padding: '40px', backgroundColor: '#f3f3f3' }}>
                <Box sx={{ marginBottom: '40px' }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', color: '#e74c3c', marginBottom: '20px' }}>
                        Welcome to Fabricons
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center', color: '#333', maxWidth: '800px', margin: '0 auto' }}>
                        At Fabricons, we believe that your home is a reflection of your unique style and comfort.
                        Our bed sheets are crafted with care to provide the highest level of comfort, while enhancing the aesthetics of your bedroom.
                        Explore our HOT WEEK collection, featuring premium designs and fabrics to elevate your sleeping experience.
                    </Typography>
                </Box>

                <Button
                    variant="outlined"
                    onClick={() => setShowCart(!showCart)}
                    sx={{ marginBottom: '20px' }}
                >
                    {showCart ? "Hide Cart" : "View Cart"}
                </Button>

                {showCart ? (
                    <Cart cartItems={cart} handleRemoveFromCart={handleRemoveFromCart} />
                ) : (
                    <Box sx={{ padding: '20px', backgroundColor: '#fff', marginTop: '40px' }}>
                        <Typography
                            variant="h4"
                            sx={{ textAlign: 'center', marginBottom: '20px', color: '#e74c3c' }}
                        >
                            HOT WEEK : Top Bed Sheets Premium Collection
                        </Typography>
                        <Slider {...settings}>
                            {hotBedsheetsCollection.map((image) => (
                                <Box
                                    key={image.id}
                                    sx={{
                                        borderRadius: '8px',
                                        overflow: 'hidden',
                                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                                        textAlign: 'center',
                                        paddingBottom: '20px'
                                    }}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        style={{
                                            width: '100%',
                                            height: '600px',
                                            objectFit: 'cover',
                                            borderRadius: '8px',
                                        }}
                                    />
                                    {cart.find((cartItem) => cartItem.id === image.id) ? (
                                        <Button
                                            variant="outlined"
                                            sx={{ marginTop: '20px', color: '#e74c3c', borderColor: '#e74c3c' }}
                                            onClick={() => handleRemoveFromCart(image.id)}
                                        >
                                            Remove from Cart
                                        </Button>
                                    ) : (
                                        <Button
                                            variant="contained"
                                            sx={{ marginTop: '20px', backgroundColor: '#e74c3c', color: '#fff' }}
                                            onClick={() => handleAddToCart(image)}
                                        >
                                            Add to Cart
                                        </Button>
                                    )}
                                </Box>
                            ))}
                        </Slider>
                    </Box>
                )}
            </Box>
        </>
    );
};

export default Home;
