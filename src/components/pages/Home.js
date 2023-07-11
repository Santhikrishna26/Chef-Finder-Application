import { Grid } from "@mui/material";

const Home = () => {
  return <>
    <Grid container justifyContent='center'>
      <Grid item sm={10}>
        <h1>Home Page</h1>
        <hr />
        <p>Welcome to our Chef Finder Application . <br></br>
          We will help you find the best chef in town for your special Occasions.
        </p>
      </Grid>
    </Grid>
  </>;
};

export default Home;
