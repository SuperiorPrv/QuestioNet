import React, { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';
import './Users.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1f2937', // Темно-серый для стиля
    },
    secondary: {
      main: '#4f46e5', // Фиолетовый для акцентов
    },
    action: {
      hover: '#6366f1', // При наведении будет светло-фиолетовый
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h5: {
      fontWeight: 700,
    },
  },
});

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://questionet-data-server.glitch.me/api/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box className="table-container" sx={{ padding: 4 }}>
        <h1 className="table-title">Users</h1>
        <TableContainer component={Paper} elevation={3}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="table-header">ID</TableCell>
                <TableCell className="table-header">Name</TableCell>
                <TableCell className="table-header">Email</TableCell>
                <TableCell className="table-header">Phone Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user,i) => (
                <TableRow key={i} className="table-row">
                  <TableCell>{i+1}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </ThemeProvider>
  );
};

export default Users;
