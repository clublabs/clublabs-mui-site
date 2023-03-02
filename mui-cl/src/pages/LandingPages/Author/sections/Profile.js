// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
// import profilePicture from "assets/images/bruce-mars.jpg";

function Profile() {
  return (
    <MKBox component="section" py={{ xs: 3, sm: 12 }}>
      <Container>
        <Grid item xs={12} md={10} mx={{ xs: "auto", sm: 6, md: 1 }}>
          <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
            <MKTypography variant="h1">Our History - yesterday vs today</MKTypography>
          </MKBox>

          <MKTypography variant="body1" fontWeight="light" color="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet faucibus auctor.
            Fusce enim nibh, lobortis in ante cursus, pellentesque malesuada ante. Nunc et bibendum
            nisi, tristique convallis est. Nulla quis ligula consequat, bibendum nisl in, tincidunt
            est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc a odio id arcu
            volutpat porta. In hac habitasse platea dictumst. Cras vel est metus. Vestibulum iaculis
            vehicula rutrum.
            <MKTypography
              component="a"
              href="#"
              variant="body1"
              fontWeight="light"
              color="info"
              mt={3}
              sx={{
                width: "max-content",
                display: "flex",
                alignItems: "center",

                "& .material-icons-round": {
                  transform: `translateX(3px)`,
                  transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                },

                "&:hover .material-icons-round, &:focus .material-icons-round": {
                  transform: `translateX(6px)`,
                },
              }}
            >
              Learn more <Icon sx={{ fontWeight: "bold" }}>chevron_right</Icon>
            </MKTypography>
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
