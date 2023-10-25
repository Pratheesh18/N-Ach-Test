import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import UsersList from "./components/UsersList/UsersList";
import React, { useState, useEffect } from "react";
import axios from "axios";
import UserDetails from "./components/UserDetails/UserDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";

function App() {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users");
      setUsers(response.data.users);
    } catch (error) {
      console.error("Error fetching users : ", error);
    }
  };

  return (
    // <>
    //   {/* <NavBar />
    //   <Main />
    //   <Footer /> */}
    //   <NavBar loadUsers={loadUsers} />
    //   {users.length > 0 && <UsersList users={users} />}
    // </>
    <>
      <Router>
      <AppLayout>
        <NavBar loadUsers={loadUsers} />
        <Routes>
          <Route path="/" element={<UsersList users={users} />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
        </AppLayout>
      </Router>
    </>
  );
}

export default App;
