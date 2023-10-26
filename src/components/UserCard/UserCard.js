import React from "react";
import { Card } from "react-bootstrap";

const UserCard = ({ user }) => {
  return (
    <div>
    <Card style={{margin:"40px" , height:"auto" , maxHeight:'430px' , width:'300px' , gap:'10px' , display:'flex' }}>
      <Card.Img variant="top" src={user.image} alt="User Image" style={{maxWidth:"250px" , maxHeight:"250px"}} />
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