import { Avatar, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { NavLink,useNavigate,useLocation } from 'react-router-dom';
import { AuthContext } from '../Assets/contexts/AuthProvider';
import UseTitle from '../Assets/Hooks/UseTitle';
import SocialLogin from './Shared/SocialLogin';


const Login = () => {
 
  UseTitle('Login')
  const {loginWithEmail,setLoading}= useContext(AuthContext)
  const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
 

const handleLogin = (e)=>{
  e.preventDefault()
  const form = e.target
 setLoading(true)
  const email = form.email.value
  const password = form.password.value


  loginWithEmail(email,password)
  .then(result=>{
    const user = result.user
    console.log(user)

    const currentUser = {
      email: user.email
  }

  fetch('https://service-review-server-woad.vercel.app/jwt', {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(currentUser)
})
    .then(res => res.json())
    .then(data => {
     
        // local storage is the easiest but not the best place to store jwt token
        localStorage.setItem('service-token', data.token);
        navigate(from, { replace: true });
    });


   toast.success('login successfull')
   form.reset()
   navigate(from, {replace: true});
  })
  .catch(err=>{
   toast.error(err.message.slice(22,-2))
  })
  .finally(() => {
    setLoading(false);
})
}

    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
           
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleLogin} noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
             
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                
              <div className='text-center'>
              <NavLink  to='/signup'variant="body2">
                  New User? Sign up now
                </NavLink>
              </div>
                
              </Grid>
            </Grid>
          </Box>
          <SocialLogin/>
        </Box>
        
      </Container>
    );
};

export default Login;