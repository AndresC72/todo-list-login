import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hook/useForm';
import { Typography, TextField, Button, Box } from '@mui/material';

export const LoginPage = () => {
  const navigate = useNavigate();

  const { name, email, password, onInputChange, onResetForm } = useForm({
    name: '',
    email: '',
    password: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const onLogin = e => {
    e.preventDefault();

    navigate('/dashboard', {
      replace: true,
      state: {
        logged: true,
        email,
      },
    });

    onResetForm();
  };

  const handleInputChange = e => {
    onInputChange(e);

    setIsFormValid(email.trim() !== '' && password.trim() !== '');
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="400px"
        p={2}
        bgcolor="white"
        boxShadow={1}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Iniciar Sesión
        </Typography>

        <form onSubmit={onLogin}>
          <Box mb={2}>
            <TextField
              type='text'
              name='name'
              label='Nombre'
              value={name}
              onChange={handleInputChange}
              required
              autoComplete='off'
              sx={{ width: '350px' }}
            />
          </Box>

          <Box mb={2}>
            <TextField
              type='email'
              name='email'
              label='Email'
              value={email}
              onChange={handleInputChange}
              required
              autoComplete='off'
              sx={{ width: '350px' }}
            />
          </Box>

          <Box mb={2}>
            <TextField
              type='password'
              name='password'
              label='Contraseña'
              value={password}
              onChange={handleInputChange}
              required
              autoComplete='off'
              sx={{ width: '350px' }}
            />
          </Box>

          <Box mt={2}>
            <Button sx={{ width: '350px' }} variant="contained" type="submit" disabled={!isFormValid}>
              Entrar
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};
