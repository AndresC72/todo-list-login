export const setEmail = (email) => ({
    type: 'SET_EMAIL',
    payload: email,
  });
  
  export const login = (email, password) => ({
    type: 'LOGIN',
    payload: { email, password },
  });
  