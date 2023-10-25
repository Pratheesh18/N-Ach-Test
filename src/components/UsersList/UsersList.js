import React from "react";
import UserCard from "../UserCard/UserCard";
import { Container, Row, Col } from "react-bootstrap";


const UsersList = ({ users }) => {
  return (
    // User List goes here...
    <Container style={{marginTop:"20px"}}>
      <Row>
        <div>
          {users.map((user) => (
            <Col md={4} key={user.id}>
                <UserCard key={user.id} user={user} />
            </Col>
          ))}
        </div>
      </Row>
    </Container>
  );
};

export default UsersList;
