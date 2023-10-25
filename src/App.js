import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import NavBar from './components/NavBar';
import UsersList from './components/UsersList/UsersList';
import React , {useState , useEffect} from 'react';
import axios from 'axios';

function App() {

  const [users , setUsers] = useState([]);


  const loadUsers = async () => {
    try{
      const response = await axios.get('https://dummyjson.com/users');
      setUsers(response.data.users);
    }catch(error){
          console.error('Error fetching users : ' , error);
    }
  }



  return (
    <>
      {/* <NavBar />
      <Main />
      <Footer /> */}
      <NavBar loadUsers={loadUsers} />
      {users.length > 0 && <UsersList users={users} />}
    </>
  );
}

export default App;
