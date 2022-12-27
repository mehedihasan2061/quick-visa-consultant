
import { Button, Grid, Paper, TextField } from "@mui/material";


const CommentBox = ({handleComment}) => {
   
 


  return (
    <div  style={{ padding: 10 }} className="App">

       <h1> write a Review</h1>
     
      <Paper className="my-5" style={{ padding: "20px 20px" }}>
        
      <form  onSubmit={handleComment}>


      <Grid item xs={12}>
      <Grid item xs={12}>
                  <TextField className="mb-5" label="Rating" type='number' name='ratings' min='1' max='5'  placeholder="give rating with 1 to 5 star" variant="outlined" fullWidth required />
                </Grid>
                <TextField
                  required
                  multiline rows={4}
                  fullWidth
                  id="text"
                  label="Comment"
                  name="comment"
                  autoComplete="text"
                  aria-label="minimum height"
                />
              </Grid>
              <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Comment
            </Button>

      </form>
      </Paper>
    </div>
  );
};

export default CommentBox;
