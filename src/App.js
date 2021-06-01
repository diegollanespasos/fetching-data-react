import { useEffect, useState } from 'react';
import './App.css';
import avatar1 from './assets/avatar1.png';
import Form from './components/Form/Form.component';
import CardList from './components/CardList/CardList.component';

const App = () => {
  const [users, setUsers]= useState([]);
  const [isLoading, setIsLoading]= useState(true);
  const [hasError, setHasError]= useState(false);

  useEffect(() => {
      handleFetchUsers();
  }, [])

  const handleFetchUsers = async () => {
    try{
      const response = await fetch('https://reqres.in/api/users');
      const users = await response.json();
      setUsers(users.data);
      setIsLoading(false);

    } catch(e){
      setHasError(true);
    }
  }

  const handlePostUser = async (user) => {
      try {
        const { firstName, lastName, email, job } = user;
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: firstName, job: job })
        };

        const response = await fetch('https://reqres.in/api/users', requestOptions);
        const data = await response.json();
        const newUser = {
          id: `${data.id}_${firstName}`,
          email: email,
          first_name: firstName,
          last_name: lastName,
          avatar: avatar1
        }
        setUsers((users) => [...users, newUser]);

      } catch(e) {
          setHasError(true);
    }
  }

  return (

    (hasError)
    ?
    <div className='error'>
       <p>Sorry, we have an error</p>
       <button onClick={ () => setHasError(false)}>Back to App</button>
     </div>    
    :  
    <div className="app">
      <h1>Working with data in React</h1>
    {
      (isLoading)
      ?
      <h1>Loading Data...</h1>
      :   
      <div className='app-container'>
        <div className='app-container-left'>
          <CardList users={users} />
        </div>     
        <div className='app-container-right'>
          <Form postUser={handlePostUser} />
        </div>  
      </div>
   }
   </div>
 );
}

export default App;