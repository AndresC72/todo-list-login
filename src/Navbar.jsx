
import React, { useState, useEffect } from 'react';
import { Link as RouterLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, CircularProgress } from '@mui/material';
import logoImage from './assets/Acme-corp.png'; 
import gifImage from './assets/5.gif'; // Reemplaza "ruta-de-tu-gif" con la ubicación real de tu GIF


export const Navbar = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true); // Estado de carga
  const [isContentVisible, setIsContentVisible] = useState(false); // Estado para controlar la visibilidad del contenido


  const onLogout = async () => {
    setIsLoading(true);
    await navigate('/login', {
      replace: true,
    });
    setIsLoading(false);
  };

  const handleReload = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsContentVisible(true); // Mostrar el contenido después de cargar
    }, 2000);
  };

  useEffect(() => {
    // Simular una carga inicial al cargar la página
    setTimeout(() => {
      setIsLoading(false);
      setIsContentVisible(true); // Mostrar el contenido después de cargar
    }, 2000);
  }, []);

  return (
    <>
      <AppBar position="static" sx={{ width: '100%', backgroundColor: '#004173' }}>
        <Toolbar sx={{ mx: 0, px: 0 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div">
              <Button color="inherit" component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center' }} onClick={handleReload}>
                <img src={logoImage} alt="Logo" style={{ height: '50px', marginRight: '30px' }} />
              </Button>
            </Typography>
          </Box>
          {state?.logged ? (
            <div className="user">
              <Typography variant="body1" sx={{ marginRight: 1 }}>
               Bienvenido: {state?.email}
              </Typography>
              <Button variant="contained" onClick={onLogout}>
                {isLoading ? <CircularProgress size={20} color="inherit" /> : 'Cerrar sesión'}
              </Button>
            </div>
          ) : (
            <nav>
              <Button color="inherit" component={RouterLink} to="/login" onClick={handleReload}>
                  Iniciar sesión
              </Button>
            </nav>
          )}
        </Toolbar>
      </AppBar>
	  
      {isContentVisible ? <Outlet /> : null}
      {isLoading && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#0979b0',
            zIndex: 9999,
          }}
        >
    
		
		  
	<Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box textAlign="center">
        <img
          src={gifImage}
          alt="GIF"
          style={{ maxWidth: '50%', maxHeight: '50%' }}
        />
        <Typography variant="h3" component="div">
          Cargando...
        </Typography>
      </Box>
    </Box>
		  

        </Box>
      )}
    </>
  );
};


