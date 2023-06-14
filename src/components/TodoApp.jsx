import React, { Component } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import TodoList from './TodoList';
import backgroundImage from '../assets/background.jpg';

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
  },
};

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      tasks: [],
    };
  }

  deleteTask = (index) => {
    if (this.state.inputValue === '') {
      const tasks = [...this.state.tasks];
      tasks.splice(index, 1);
      this.setState({ tasks });
    } else {
      window.alert('No se puede eliminar la tarea si el campo de entrada no está vacío.');
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const tasks = [...this.state.tasks, this.state.inputValue];
    this.setState({ tasks, inputValue: '' });
  };

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <Box component="div" style={styles.background}>
        <Container maxWidth="sm" style={styles.container}>
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Lista de Tareas
          </Typography>
          <form onSubmit={this.handleSubmit}>
            <TextField
              label="Agregar tarea"
              variant="outlined"
              value={this.state.inputValue}
              onChange={this.handleChange}
              fullWidth
            />
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Agregar
            </Button>
          </form>
          <TodoList tasks={this.state.tasks} deleteTask={this.deleteTask} />
        </Container>
      </Box>
    );
  }
}

export default TodoApp;
