import React, { useState , useEffect } from "react";
import UserCard from "../UserCard/UserCard";
import { Container, Row, Col, Pagination } from "react-bootstrap";
import "./UsersList.css";
import { Link } from "react-router-dom";

const UsersList = ({ users }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showPagination , setShowPagination] = useState(false);
  const usersPerPage = 10;

  const totalPages = Math.ceil(users.length / usersPerPage);

  useEffect(() => {
    if(totalPages > 1){
        setShowPagination(true);
    }
  } , [users])


  const currentUsers = users.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <Container>
      <Row>
        {currentUsers.map((user) => (
          <Link style={{ textDecoration: 'none'}} to={`/user/${user.id}`} key={user.id}>
            <Col
              style={{ margin: "10px" }}
              md={4}
              key={user.id}
              className="user-card"
            >
              <UserCard key={user.id} user={user} />
            </Col>
          </Link>
        ))}
      </Row>
      <Row className="mt-4">
        <Col>
          <div className="pagination">
            {showPagination && <Pagination>
              <Pagination.Prev
                onClick={handlePrev}
                disabled={currentPage === 1}
              />
              {[...Array(totalPages)].map((_, index) => (
                <Pagination.Item
                  key={index + 1}
                  active={index + 1 === currentPage}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next
                onClick={handleNext}
                disabled={currentPage === totalPages}
              />
            </Pagination>}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UsersList;
