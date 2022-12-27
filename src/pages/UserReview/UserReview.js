import { Avatar, Button, Divider, Grid,  Paper } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import toast from 'react-hot-toast';
import StarRatings from 'react-star-ratings';
import { AuthContext } from '../../Assets/contexts/AuthProvider';
import {NavLink} from 'react-router-dom'
const UserReview = () => {

  const [myReview,setMyReview]= useState([])
  const {user}= useContext(AuthContext)
  const uid = user?.uid

  useEffect(()=>{
fetch(`https://service-review-server-woad.vercel.app/review?uid=${uid}`)
.then(res=>res.json())
.then(data=>setMyReview(data))
},[uid])

// delete comment

const handleDelete = id =>{
  const proceed = window.confirm('Are you sure, you want to cancel this order');
  if(proceed){
      fetch(`https://service-review-server-woad.vercel.app/review/${id}`, {
          method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
          
          if (data.deletedCount > 0){
              toast.success('deleted successfully');
              const remaining = myReview.filter(odr => odr._id !== id);
              setMyReview(remaining);
          }
      })
  }

 

}

// if(myReview===null){
//   return <h2 className='text-center'>no data found</h2>
// }



    return (
        <Container>
            <h1 className='text-center my-5'>Your Reviews</h1>

            <div >

{
  myReview.map(mr=> <div key={mr._id}> <Paper className='my-5' style={{ padding: "20px 20px" }}>
  <Grid container wrap="nowrap" spacing={2}>
    <Grid item>
      <Avatar alt="Remy Sharp" src={mr.photo ? mr.photo : ''}  />
    </Grid>
    <Grid justifyContent="left" item xs zeroMinWidth>
      <h4 style={{ margin: 0, textAlign: "left" }}>{mr.name}</h4>
      <p style={{ textAlign: "left" }}>
  {mr.commentSingle}
      </p>
      <p>
        <StarRatings
        rating={parseInt(mr.ratings)}
        starDimension="30px"
        starSpacing="10px"
        starRatedColor="orange"
        />
      </p>
      <p style={{ textAlign: "left", color: "gray" }}>
        posted 1 minute ago
      </p>
    </Grid>
    <div className='me-5 d-flex flex-direction-column align-items-center' >
  <Button onClick={()=>handleDelete(mr._id)} className='mx-2' variant="contained">delete  </Button>
<NavLink to={`/update/${mr._id}`} className='mx-2' variant="outlined">update</NavLink>
  </div >
  </Grid>
 
  <Divider variant="fullWidth" style={{ margin: "5px 5px" }} />
  
</Paper>
</div>)
}

     
    
   </div>




        </Container>
    );
};

export default UserReview;