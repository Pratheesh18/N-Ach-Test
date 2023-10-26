import React from "react";
import { Card } from "react-bootstrap";

const UserCard = ({ user }) => {
  return (
    <div className="card">
    <Card style={{margin:"40px"}}>
      <Card.Img variant="top" src={user.image} alt="User Image" style={{width:"250px" , height:"250px"}} />
      <Card.Body>
        <Card.Title>{user.username}</Card.Title>
        <Card.Text>
          Email: {user.email} <br />
          Phone: {user.phone}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
};


export default UserCard;