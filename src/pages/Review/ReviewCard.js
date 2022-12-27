import React from 'react';
import { Avatar, Divider, Grid, Paper } from "@mui/material";
import StarRatings from 'react-star-ratings';

const ReviewCard = ({comment}) => {
 
  
  const {commentSingle,name,photo,ratings}=comment
    return (
        <div >
     
      <Paper className='my-5' style={{ padding: "20px 20px" }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt="Remy Sharp" src={photo ? photo:""}  />
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>{name}</h4>
            <p style={{ textAlign: "left" }}>
             {commentSingle}
            </p>
            <p style={{ textAlign: "left", color: "gray" }}>
              posted 1 minute ago
            </p>
            <p style={{ textAlign: "left", color: "gray" }}>
            {
  ratings ?
  <StarRatings
  rating={parseInt(ratings)}
  starDimension="30px"
  starSpacing="10px"
  starRatedColor="orange"
/>
:
<span className='text-danger ms-3'>no ratings</span>
}
            </p>
          </Grid>
        </Grid>
        <Divider variant="fullWidth" style={{ margin: "5px 5px" }} />
        
      </Paper>
    </div>
    );
};

export default ReviewCard;