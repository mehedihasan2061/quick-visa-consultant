import {
  Avatar,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { NavLink,useLocation,useNavigate } from "react-router-dom";
import { AuthContext } from "../Assets/contexts/AuthProvider";
import UseTitle from "../Assets/Hooks/UseTitle";
import SocialLogin from "./Shared/SocialLogin";

const Register = () => {
  UseTitle('Sign Up')
  const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
  const { createUserWithEmail,updateUserProfile,setLoading } = useContext(AuthContext);

  const handleSignupWithEmail = (e) => {
    e.preventDefault();
    const form = e.target
    const name = `${form.firstName.value} ${form.lastName.value}`
    const email = form.email.value
    const password = form.password.value
   
    createUserWithEmail(email,password)
    .then(result=>{
      
      const user = result.user
      
  
      const currentUser = {
        email: user.email
    }

    // jwt code

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
        handleUpdateUserProfile(name);
        navigate(from, { replace: true });
    });

    



      
      
     
    })
.catch(err=>toast.error(err.message.slice(22,-2)))
.finally(() => {
  setLoading(false);
})

// user update

const handleUpdateUserProfile = (name) => {
  const profile = {
      displayName: name,
     
  }

  updateUserProfile(profile)
      .then(() => { })
      .catch(error => console.error(error));
}

  };

  return (

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
        


<Box onSubmit={handleSignupWithEmail} component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
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
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
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
              Sign Up
            </Button>

         
            <Grid container justifyContent="center">
              <Grid item>
                <NavLink to="/login" variant="body2" display="inline-block">
                  Already have an account? Sign in
                </NavLink>
              </Grid>
            </Grid>
          </Box>

<SocialLogin/>

        </Box>
      </Container>
   
  );
};

export default Register;
