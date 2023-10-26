import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card , Button } from "react-bootstrap";
import { useParams , useNavigate } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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


  const handleBack = () => {
    navigate('/')
  }

  return (
    <div className="container mt-5">
      <Card style={{margin:"40px" ,  height:"auto" , maxHeight:'430px' , width:'300px' , gap:'10px' , display:'flex' , backgroundColor:'#df944f' }}>
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
       <Button onClick={handleBack} style={{height:"3rem" , marginTop:'60px' , marginLeft:'15rem' , width:"10rem" , fontSize:'medium' , fontWeight:'550' , background:'#df944f' , color:'#472200' , border:' #df944f' , borderRadius:'0.5rem',transition:'background-color 250ms' , transitionTimingFunction:'cubic-bezier(0.4, 0, 0.2, 1)'}} > Back To UsersList </Button>
       <Card style={{width:'280px' , height:'200px' , maxHeight:'430px' , marginLeft:'30rem' , marginTop:'-22rem'}}>
        <Card.Img variant="right" src={user.image} alt="User Image" style={{width:'150px' , height:'150px' , marginLeft:'50px'}} />
       </Card>
    </div>

  );
};


export default UserDetails;
