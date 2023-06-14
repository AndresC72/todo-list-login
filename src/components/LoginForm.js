import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setEmail, login } from '../actions';
import { TextField, Button, Typography, Box } from '@mui/material';
import loginImage from '../assets/login-image.jpg';

const LoginForm = ({ email, setEmail, login }) => {
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    if (email && password && !emailError) {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  }, [email, password, emailError]);

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);

    // Validar el correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value && !emailRegex.test(value)) {
      setEmailError('Correo electrónico inválido');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password && !emailError) {
      // Realizar lógica de inicio de sesión
      login(email, password);
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      style={{
        backgroundImage: `url(${loginImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box maxWidth={400} width="100%" bgcolor="rgba(255, 255, 255, 0.8)" p={3} borderRadius={8}>
        <Typography variant="h4" gutterBottom>
          Iniciar sesión
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            id="email"
            label="Correo electrónico"
            variant="outlined"
            type="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleEmailChange}
            error={!!emailError}
            helperText={emailError}
            fullWidth
            margin="normal"
          />
          <TextField
            id="password"
            label="Contraseña"
            variant="outlined"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            fullWidth
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitDisabled}
            fullWidth
            size="large"
            href="/about"
          >
            Ingresar
          </Button>
        </form>
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    email: state.email,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setEmail: (email) => dispatch(setEmail(email)),
    login: (email, password) => dispatch(login(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
