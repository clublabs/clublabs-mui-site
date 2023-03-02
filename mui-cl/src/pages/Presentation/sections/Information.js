// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// animate
import "animate.css";

// Images
// import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKBadge
            className="animate__animated animate__fadeInUp animate__delay-2s"
            variant="contained"
            color="info"
            badgeContent="Working at ClubLabs"
            container
            sx={{ mb: 2 }}
          />
          <MKTypography variant="h2" fontWeight="bold">
            Our core values
          </MKTypography>
          <MKTypography variant="body1" color="text">
            Our shared values below, help keep us aligned and motivated:
          </MKTypography>
        </Grid>

        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                // image={bgFront}
                icon="local_library"
                title={
                  <>
                    Always
                    <br />
                    learning
                  </>
                }
                description=""
              />
              <RotatingCardBack
                image={bgBack}
                title=""
                description="Your curiosity leads you to ask really good questions and your analytical skills help you seek out the answers."
                // action={{
                //   type: "internal",
                //   route: "/sections/page-sections/page-headers",
                //   label: "more details",
                // }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                // image={bgFront}
                icon="volunteer_activism"
                title={
                  <>
                    You are
                    <br />
                    Humble
                  </>
                }
                description=""
              />
              <RotatingCardBack
                image={bgBack}
                title=""
                description="You are someone who readily admits what you don't know - you're always looking to get better (and you're really good at getting better)."
                // action={{
                //   type: "internal",
                //   route: "/sections/page-sections/page-headers",
                //   label: "More details",
                // }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                // image={bgFront}
                icon="bar_chart"
                title={
                  <>
                    You are
                    <br />
                    Data Driven
                  </>
                }
                description=""
              />
              <RotatingCardBack
                image={bgBack}
                title=""
                description="But you know data is a starting point (it doesn't tell you everything) and you continue to learn."
                // action={{
                //   type: "internal",
                //   route: "/sections/page-sections/page-headers",
                //   label: "More details",
                // }}
              />
            </RotatingCard>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
