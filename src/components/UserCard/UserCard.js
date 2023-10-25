import React from "react";
import { Card } from "react-bootstrap";

const UserCard = ({ user }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={user.avatar} />
      <Card.Body>
        <Card.Title>{user.username}</Card.Title>
        <Card.Text>
          Email: {user.email} <br />
          Phone: {user.phone}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};


export default UserCard;