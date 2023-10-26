import NavBar from "./NavBar";
import UsersList from "./UsersList/UsersList";
import React, { useState } from "react";
import axios from "axios";
import UserDetails from "./UserDetails/UserDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from './AppLayout'

const Main = () => {
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
    <main>
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
    </main>
  );
};

export default Main;
