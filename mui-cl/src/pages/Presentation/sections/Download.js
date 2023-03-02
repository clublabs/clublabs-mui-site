// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Tooltip from "@mui/material/Tooltip";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/past5.png";

function Download() {
  return (
    <MKBox component="section" py={{ xs: 0, sm: 12 }}>
      <MKBox
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <MKBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={0.2}
        />
        <Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
          <Grid container item xs={12} md={7} justifyContent="center" mx="auto" textAlign="center">
            <MKTypography variant="h3" color="white">
              Interested in joining the ClubLabs Team?
            </MKTypography>

            <MKTypography variant="body2" color="white" mb={6}>
              We are always looking for new talent to join the ClubLabs team - interested in
              applying for a role or learning more? Click below
            </MKTypography>
            <MKButton
              variant="gradient"
              color="info"
              size="large"
              component="a"
              href="#"
              sx={{ mb: 2 }}
            >
              Contact us
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default Download;
