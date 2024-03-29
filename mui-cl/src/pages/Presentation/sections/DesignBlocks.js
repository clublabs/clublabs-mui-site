// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// Presentation page components
import ExampleCard from "pages/Presentation/components/ExampleCard";

// animate
import "animate.css";

// Data
import data from "pages/Presentation/sections/data/designBlocksData";

function DesignBlocks() {
  const renderData = data.map(({ title, description, items }) => (
    <Grid container spacing={3} sx={{ mb: 10 }} key={title}>
      <Grid item xs={12} lg={3}>
        <MKBox
          position="sticky"
          top="100px"
          pb={{ xs: 2, lg: 6 }}
          className="animate__animated animate__fadeInUp animate__delay-2s"
        >
          <MKTypography variant="h3" fontWeight="bold" mb={1}>
            {title}
          </MKTypography>
          <MKTypography
            variant="body2"
            fontWeight="regular"
            color="secondary"
            mb={1}
            pr={2}
            className="animate__animated animate__fadeInUp animate__delay-3s"
          >
            {description}
          </MKTypography>
        </MKBox>
      </Grid>
      <Grid item xs={12} lg={9}>
        <Grid container spacing={3}>
          {items.map(({ image, name, count, route, pro }) => (
            <Grid item xs={12} md={4} sx={{ mb: 2 }} key={name}>
              <Link to={pro ? "/" : route}>
                <ExampleCard image={image} name={name} count={count} pro={pro} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ));

  return (
    <MKBox component="section" my={3} py={1}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
          className="animate__animated animate__fadeInUp animate__delay-1s"
        >
          {/* <MKBadge
            variant="contained"
            color="info"
            badgeContent="Welcome to"
            container
            sx={{ mb: 2 }}
          /> */}
          <MKTypography variant="h2" fontWeight="bold">
            How does Clublabs fit into AAA?
          </MKTypography>
          <MKTypography variant="body1" color="text">
            Clublabs is a department within AAA which is made up of the top technical talent on
            offer to innovate and deliver technical capabilities and experiences that benefit our
            members and their experience with AAA products and services.
          </MKTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}

export default DesignBlocks;
