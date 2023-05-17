import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import LoginForm from '../components/LoginForm';

export default function Home() {
  return (
    <Provider store={store}>
      <LoginForm />
    </Provider>
  );
}
