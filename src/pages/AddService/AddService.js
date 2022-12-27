import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Assets/contexts/AuthProvider';
import UseTitle from '../../Assets/Hooks/UseTitle';

const AddService = () => {
  UseTitle('Add A service')

    const {setLoading}= useContext(AuthContext)
    

    const handleSubmit=(e)=>{
        e.preventDefault()
        const form = e.target
        const title= form.title.value
        const price= form.price.value
        const ratings= form.ratings.value
        const description= form.description.value
        const thubm_img= form.url.value
        

        const data = {
            title,price,description,thubm_img,ratings
        }
        setLoading(true)
        fetch(` https://service-review-server-woad.vercel.app/services`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
          })
          .then(res => res.json())
          .then(data => 
            
            {
              if(data.acknowledged){
                setLoading(false)
                  toast.success('User added successfully');
                 
              }
          })
          .catch(err=>toast.error(err.message))
       

    }

    return (
        <Container>
            <h1 className="text-center my-5">Add A New Service</h1>
            <Container className='my-5'>
       
      <Grid>
        <Card >
          <CardContent>
            <Typography gutterBottom variant="h5">
              Add A new Service
          </Typography> 
           
            <form onSubmit={handleSubmit}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Title" label="title" name='title' variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="price" label="price" name='price' variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12} sm={6} >
                  <TextField type="url" placeholder="Enter image url" name='url' label="Image Url" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12} sm={6} >
                  <TextField type="number"  min="1" max="5" placeholder="Enter image url" name='ratings' label="ratings" variant="outlined" fullWidth required />
                </Grid>
               
                <Grid item xs={12}>
                  <TextField label="description" name='description' multiline rows={4} placeholder="Type your Description here" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
      </Container>
        </Container>
    );
};

export default AddService;