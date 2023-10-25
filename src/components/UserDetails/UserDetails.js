import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/users/${id}`
        );
        setUser(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching User Details ", error);
      }
    };

    fetchUserData();
  }, [id]);

  return (
    <div className="container mt-5">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title> {user.username} </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            
            {user.firstName} {user.lastName}
          </Card.Subtitle>
          <Card.Text>
            Email: {user.email} <br />
            Phone: {user.phone} <br />
            Age: {user.age} <br />
            Gender: {user.gender} <br />
            Address : {user.address?.address}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};


export default UserDetails;
