import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Cart = ({ cartItems, handleRemoveFromCart }) => {
    return (
        <Box sx={{ padding: '20px', backgroundColor: '#fff', marginTop: '20px' }}>
            <Typography variant="h5" sx={{ marginBottom: '20px', color: '#2980b9' }}>
                Your Cart
            </Typography>
            {cartItems.length === 0 ? (
                <Typography variant="body1">Your cart is empty.</Typography>
            ) : (
                cartItems.map((item) => (
                    <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                        <img
                            src={item.src}
                            alt={item.alt}
                            style={{
                                width: '100px',
                                height: '100px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                                marginRight: '20px',
                            }}
                        />
                        <Typography variant="body1" sx={{ flexGrow: 1 }}>{item.name}</Typography>
                        <Button
                            variant="outlined"
                            sx={{ color: '#e74c3c', borderColor: '#e74c3c' }}
                            onClick={() => handleRemoveFromCart(item.id)}
                        >
                            Remove
                        </Button>
                    </Box>
                ))
            )}
        </Box>
    );
};

export default Cart;
