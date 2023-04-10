import { Grid } from '@mui/material';
import { React, useState, useEffect } from 'react';

import './App.css';
import MediaCard from './Components/card';
import Loader from './Components/loader';

function App() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log('dsff', users);
    setUsers(users);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((person) => person.id != id));
  };

  return (
    <div className='App'>
      {loading ? (
        <Loader />
      ) : (
        <Grid container spacing={2}>
          {users.map((data) => (
            <Grid item key={data.id} xs={3} md={3}>
              <MediaCard data={data} handleDelete={handleDelete} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default App;
