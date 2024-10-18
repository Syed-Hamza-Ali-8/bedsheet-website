import React, { useState } from 'react';
import { Typography, Box, Grid, Button, Drawer, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const products = [
    {
        id: 1,
        image: "src/assets/light-blue-bdsheet.jfif",
        price: "$29.99",
        description: "Soft and comfortable bed sheet for a restful sleep.",
        name: 'Light-Blue',
    },
    {
        id: 2,
        image: "src/assets/yellow-bdsheet.jfif",
        price: "$24.99",
        description: "Elegant design to enhance your bedroom decor.",
        name: 'Yellow',
    },
    {
        id: 3,
        image: "src/assets/orange-bdsheet.jfif",
        price: "$27.99",
        description: "Luxury and softness combined for the perfect sleep.",
        name: 'Orange',
    },
    {
        id: 4,
        image: "src/assets/light-orange-bdsheet.jfif",
        price: "$32.99",
        description: "Breathable and durable fabric for long-lasting comfort.",
        name: 'Light-Orange',
    },
    {
        id: 5,
        image: "src/assets/brown-bdsheet.jfif",
        price: "$32.99",
        description: "Vibrant designs that brighten your space and elevate your decor.",
        name: 'Brown',
    },
    {
        id: 6,
        image: "src/assets/gray-bdsheet.jfif",
        price: "$32.99",
        description: "Sustainable materials that ensure eco-friendly comfort and durability.",
        name: 'Gray',
    },
    {
        id: 7,
        image: "src/assets/yellow-flowry-bdsheet.jfif",
        price: "$32.99",
        description: "Cool to the touch, perfect for a refreshing night's rest.",
        name: 'Yellow-Flowry',
    },
    {
        id: 8,
        image: "src/assets/dark-blue-bdsheet.jfif",
        price: "$32.99",
        description: "Classic patterns that seamlessly blend with any bedroom theme.",
        name: 'Dark-Blue',
    },
    {
        id: 9,
        image: "src/assets/peach-bdsheet.jfif",
        price: "$32.99",
        description: "High-quality stitching that promises longevity and a perfect fit for your mattress.",
        name: 'Peach',
    },
    {
        id: 10,
        image: "src/assets/red-purple-combo-bdsheet.jfif",
        price: "$32.99",
        description: "Soft and breathable fabric that promotes airflow for a cooler sleep experience.",
        name: 'Red-Purple',
    },
    {
        id: 11,
        image: "src/assets/colorful-bdsheet.jfif",
        price: "$32.99",
        description: "Timeless designs that add a touch of sophistication to your bedroom decor.",
        name: 'Colorful',
    },
    {
        id: 12,
        image: "src/assets/white-brown-combo-bdsheet.jfif",
        price: "$32.99",
        description: "Fade-resistant colors that maintain their vibrancy wash after wash.",
        name: 'White-Brown-Combo',
    },
];

const Products = () => {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleAddToCart = (product) => {
        if (!cart.some((item) => item.name === product.name)) {
            setCart([...cart, product]);
            alert(`Bed Sheet color: ${product.name} added to cart!`);
        }
    };

    const handleRemoveFromCart = (product) => {
        setCart(cart.filter((item) => item.name !== product.name));
        alert(`Bed Sheet color: ${product.name} removed from cart!`);
    };

    const toggleCartDrawer = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <>
            <Navbar />
            <Box sx={{ padding: '40px', backgroundColor: '#f3f3f3', color: '#333' }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '40px', color: '#2980b9' }}>
                    Our Bed Sheets
                </Typography>
                <Grid container spacing={4}>
                    {products.map((product) => (
                        <Grid item xs={12} sm={6} md={4} key={product.id}>
                            <Box
                                sx={{
                                    border: '1px solid #ddd',
                                    borderRadius: '12px',
                                    padding: '20px',
                                    backgroundColor: '#fff',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    '&:hover': {
                                        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
                                    },
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                }}
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    style={{
                                        width: '100%',
                                        height: '200px',
                                        objectFit: 'cover',
                                        borderRadius: '12px',
                                        marginBottom: '15px',
                                    }}
                                />
                                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px', color: '#2c3e50' }}>
                                    {product.name}
                                </Typography>
                                <Typography variant="body1" sx={{ marginBottom: '10px', color: '#7f8c8d' }}>
                                    {product.description}
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2980b9', marginBottom: '10px' }}>
                                    {product.price}
                                </Typography>
                                <Box sx={{ flexGrow: 1 }} />
                                <Button
                                    variant="contained"
                                    sx={{
                                        marginTop: '15px',
                                        backgroundColor: cart.some((item) => item.name === product.name) ? '#bdc3c7' : '#2980b9',
                                        '&:hover': {
                                            backgroundColor: cart.some((item) => item.name === product.name) ? '#bdc3c7' : '#3498db',
                                        },
                                        color: '#fff',
                                    }}
                                    disabled={cart.some((item) => item.name === product.name)}
                                    onClick={() => handleAddToCart(product)}
                                >
                                    {cart.some((item) => item.name === product.name) ? 'Added to Cart' : 'Add to Cart'}
                                </Button>

                                {cart.some((item) => item.name === product.name) && (
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            marginTop: '10px',
                                            borderColor: '#e74c3c',
                                            color: '#e74c3c',
                                            '&:hover': {
                                                backgroundColor: '#e74c3c',
                                                color: '#fff',
                                            },
                                        }}
                                        onClick={() => handleRemoveFromCart(product)}
                                    >
                                        Remove from Cart
                                    </Button>
                                )}
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                <Button
                    variant="contained"
                    sx={{ marginTop: '20px', backgroundColor: '#2980b9', color: '#fff' }}
                    onClick={toggleCartDrawer}
                >
                    View Cart ({cart.length})
                </Button>
            </Box>

            <Drawer anchor="right" open={isCartOpen} onClose={toggleCartDrawer}>
                <Box sx={{ width: 350, padding: '20px' }}>
                    <Typography variant="h5" sx={{ marginBottom: '20px' }}>
                        Your Cart
                    </Typography>
                    <List>
                        {cart.length === 0 ? (
                            <Typography variant="body1">Your cart is empty.</Typography>
                        ) : (
                            cart.map((item) => (
                                <ListItem key={item.id} sx={{ marginBottom: '15px' }}>
                                    <ListItemAvatar>
                                        <Avatar src={item.image} alt={item.name} sx={{ width: 80, height: 80 }} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item.name}
                                        secondary={item.price}
                                    />
                                    <Button
                                        variant="outlined"
                                        sx={{ borderColor: '#e74c3c', color: '#e74c3c' }}
                                        onClick={() => handleRemoveFromCart(item)}
                                    >
                                        Remove
                                    </Button>
                                </ListItem>
                            ))
                        )}
                    </List>
                </Box>
            </Drawer>

            <Footer />
        </>
    );
};

export default Products;
