import React from 'react';
import { Typography } from '@mui/material';
import gifImage from '../assets/6.gif'; // Reemplaza "../assets/6.gif" con la ubicación real de tu GIF

export const HomePage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
      <Typography variant="h1" component="h1" gutterBottom>
        Inicia sesion correcaminos
      </Typography>
      <img src={gifImage} alt="GIF" style={{ maxWidth: '50%', maxHeight: '50%' }} />
    </div>
  );
};
