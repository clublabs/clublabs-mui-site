// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
// import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";

// Presentation page components
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// animate
import "animate.css";

// Images
import bgImage from "assets/images/bg-presentation.jpg";

function Presentation() {
  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox
        minHeight="68vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              className="animate__animated animate__fadeInUp animate__delay-1s"
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              We are Clublabs!
            </MKTypography>
            <MKTypography
              className="animate__animated animate__fadeInUp animate__delay-2s"
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
              pb={1}
            >
              ClubLabs is the digital acceleration team for AAA – and we have one goal; to build
              something awesome.
            </MKTypography>
            <MKTypography
              className="animate__animated animate__fadeInUp animate__delay-3s"
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              We create exceptional digital experiences to exceed our members expectations across a
              wide array of products and services, including Insurance, Travel, Membership, Roadside
              Assistance and more.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <DesignBlocks />
        {/* <Pages /> */}
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                // variant="gradient"
                color="info"
                icon="groups_2_two-tone"
                title="We are member-centric"
                description="Everything we do is for the good of our members – their trust is our most valuable possession."
                action={{
                  type: "external",
                  route: "#",
                  label: "Read more",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="money_off"
                title="We are a not-for-profit organization."
                description="We are here for our members and because of our members – no stockholders, no investment groups, simply us doing our best for our members."
                action={{
                  type: "external",
                  route: "#",
                  label: "Read more",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="account_balance"
                title="120+ year legacy and financial stability."
                description="We work for an historic organization that has been around for over 120 years! With this history comes culture and stability. Whatever the economic outlook, we have always stood the test of time."
                action={{
                  type: "external",
                  route: "#",
                  label: "Read more",
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Grid container pt={3} spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="groups_3"
                title="We develop our people."
                description="If you are looking for an organization to learn and grow, then look no further. We are passionate about providing technical and leadership development training to help you obtain your career ambitions, including the Technical Talent Acceleration Program."
                action={{
                  type: "external",
                  route: "#",
                  label: "Read more",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="volunteer_activism"
                title="We care about our communities."
                description="We offer all employees 8 hours of paid volunteer time to give back to the communities in which we serve, in addition to partnering with United Way & Habitat for Humanity."
                action={{
                  type: "external",
                  route: "#",
                  label: "Read more",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="loyalty"
                title="A top-notch employee experience matters to us."
                description="Here at ClubLabs we know that our people are what makes us so special, that’s why we offer our people with a free membership, free tickets, fun employee events, frequent feedback and 1:1’s, employee discounts, social clubs, employee engagement groups, flexible work programs, a games room, stocked kitchens, 401k & pension, benefits and more!"
                action={{
                  type: "external",
                  route: "#",
                  label: "Read more",
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <Information />
        <Container sx={{ mt: 3 }}>
          <BuiltByDevelopers />
        </Container>
        {/* <Download /> */}
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
