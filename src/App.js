import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [users, setUsers]= useState([]);
  const [isLoading, setIsLoading]= useState(true);
  const [name, setName]= useState('');
  const [job, setJob]= useState('');

  useEffect(() => {
   handleFetchUsers();

  }, [])

  const handleFetchUsers = async () => {
    const response = await fetch('https://reqres.in/api/users');
    const users = await response.json();
    setUsers(users.data);
    setIsLoading(false);
  }

  //Ponerle try/catch
  const handlePostUser = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Diego', job: 'Farmer' })
    };

    //checar como se maneja sí hay error
    const response = await fetch('https://reqres.in/api/users', requestOptions);
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="app-container">
    {
      isLoading 
      ?
      <h1>Loading Data</h1>
      :
        <div>
        { users.map(user => <h1 key={user.id}>{user.email}</h1>) }
        <button onClick={handlePostUser}>Post</button>
          <input label='name' value={name} onChange={(e) => setName(e.target.value)} />
          <input label='job' value={job} onChange={(e) => setJob(e.target.value)} />
        </div>
    }
    </div>
  );
}

export default App;