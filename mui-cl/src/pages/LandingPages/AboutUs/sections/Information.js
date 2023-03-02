// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import Profile from "pages/LandingPages/Author/sections/Profile";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
// import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

function Information() {
  return (
    <MKBox component="section">
      <Container>
        <Grid container xs={12} lg={12} alignItems="center">
          <Profile />
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
