// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";

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
            Founded in 1900 by 10 Los Angeles-area professionals, AAA has continually anticipated
            the needs of those who count on us and provided unique new services, expanding to offer
            membership, insurance, travel, discounts, financial, and automotive services to more
            than 17 million members. All of which means an abundance of new opportunities to learn,
            grow, and advance throughout our thriving organization.
            {/* <MKTypography
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
            </MKTypography> */}
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
