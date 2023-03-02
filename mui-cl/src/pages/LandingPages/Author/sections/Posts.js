// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
// import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
// import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// animate
import "animate.css";

// Images
// import post1 from "assets/images/examples/testimonial-6-2.jpg";
// import post2 from "assets/images/examples/testimonial-6-3.jpg";
// import post3 from "assets/images/examples/blog-9-4.jpg";
// import post4 from "assets/images/examples/blog2.jpg";
import cycle from "assets/images/cycle2.png";
// import Icon from "assets/theme/components/icon";

// scroll cards
const cardContainer = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const frame = {
  width: "1000px",
  overflow: "auto",
};

const cardList = {
  display: "flex",
  paddingLeft: "10px",
  paddingRight: "10px",
  marginBottom: "20px",
};

const card = {
  flexShrink: 0,
  width: "271px",
  height: "375px",
  border: "2px solid #d5d5d5",
  borderRadius: "20px",
  backgroundColor: "#efefef",
  marginLeft: "10px",
  marginRight: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)',
};

const space = {
  flexShrink: 0,
  width: "10px",
  height: "200px",
};

const rowCenter = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "400px",
};

const iconContainer = {
  padding: "10px",
  // width: "200px",
  // textAlign: "center",
  borderRadius: "10px",
  border: "1px solid #344767",
  backgroundColor: "white",
  // display: "inlineBlock",
  marginRight: "5px",
  display: "flex",
  justifyContent: "center",
  // alignItems: "center",
};

const grayBg = {
  backgroundColor: "#efefef",
  borderRadius: "10px",
};

const grayFont = {
  color: "#344767",
};

// const center = {
//   textAlign: "center",
//   // justifyContent: "spaceAround",
// };

function Places() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item pt={3} xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Work & Culture
          </MKTypography>
        </Grid>
        <Grid container item xs={12}>
          <MKTypography variant="body1" mb={6}>
            Here at ClubLabs, work is about much more than the day-to-day, we strive to deliver an
            employee experience so great that it excites our people to positively impact our members
            experiences with our products and services. Here are some important Cultural aspects
            about ClubLabs:
            <br />
            <br />
            <ul style={{ paddingLeft: "1rem", color: "#344767" }}>
              <li style={grayFont}>
                We are member-centric. Everything we do is for the good of our members – their trust
                is our most valuable possession.
              </li>
              <br />
              <li style={grayFont}>
                We are a not-for-profit organization. We are here for our members and because of our
                members – no stockholders, no investment groups, simply us doing our best for our
                members.
              </li>
              <br />
              <li style={grayFont}>
                120+ year legacy and financial stability. We work for an historic organization that
                has been around for over 120 years! With this history comes culture and stability.
                Whatever the economic outlook, we have always stood the test of time.
              </li>
              <br />
              <li style={grayFont}>
                We develop our people. If you are looking for an organization to learn and grow,
                then look no further. We are passionate about providing technical and leadership
                development training to help you obtain your career ambitions, including the
                Technical Talent Acceleration Program.
              </li>
              <br />
              <li style={grayFont}>
                We care about our communities. We offer all employees 8 hours of paid volunteer time
                to give back to the communities in which we serve, in addition to partnering with
                United Way & Habitat for Humanity.
              </li>
              <br />
              <li style={grayFont}>
                A top-notch employee experience matters to us. Here at ClubLabs we know that our
                people are what makes us so special, that’s why we offer our people with a free
                membership, free tickets, fun employee events, frequent feedback and 1:1’s, employee
                discounts, social clubs, employee engagement groups, flexible work programs, a games
                room, stocked kitchens, 401k & pension, benefits and more!
              </li>
            </ul>
          </MKTypography>
        </Grid>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            A day at ClubLabs
          </MKTypography>
        </Grid>
        <Grid container item xs={12}>
          <MKTypography variant="body1" mb={6}>
            Every day at ClubLabs is a new opportunity to build something awesome, but what does a
            typical day look like? Hear from the teams themselves – from UX to Product, Engineering
            to Digital Messaging, QA to Analytics and much more.
          </MKTypography>
        </Grid>
        <Grid container item xs={12} mb={6}>
          <div
            className="animate__animated animate__fadeInLeft animate__delay-2s"
            style={cardContainer}
          >
            <div style={frame}>
              <div style={cardList}>
                <div style={card}>
                  <PlayCircleIcon color="white" fontSize="large" />
                </div>
                <div style={card}>
                  <PlayCircleIcon color="white" fontSize="large" />
                </div>
                <div style={card}>
                  <PlayCircleIcon color="white" fontSize="large" />
                </div>
                <div style={card}>
                  <PlayCircleIcon color="white" fontSize="large" />
                </div>
                <div style={card}>
                  <PlayCircleIcon color="white" fontSize="large" />
                </div>
                <div style={space} />
              </div>
            </div>
          </div>
        </Grid>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            The power of teams collaboration
          </MKTypography>
        </Grid>
        <Grid container item xs={12}>
          <MKTypography variant="body1" mb={6}>
            Our People are our power, and when we collaborate, we accelerate our success and achieve
            awesomeness. Below shares our process and how we collaborate day-in and day-out.
          </MKTypography>
        </Grid>
        <Grid item xs={12}>
          <MKBox mb={6} textAlign="center">
            <MKBox component="img" src={cycle} alt="cycle" width="90%" />
          </MKBox>
        </Grid>

        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Clublabs Benefits
          </MKTypography>
        </Grid>
        <Grid container item xs={12}>
          <MKTypography variant="body1" mb={3}>
            We believe in giving you everything you need to live life to the fullest, so you’ll be
            inspired to give everything you’ve got for our members.
          </MKTypography>
        </Grid>
        <Grid container item xs={12} style={grayBg}>
          <MKTypography variant="h5" my={2} ml={2}>
            Culture
          </MKTypography>
        </Grid>
        <Grid container item xs={12}>
          <Grid style={rowCenter} my={3} item>
            <div style={iconContainer}>
              <Icon fontSize="medium">date_range</Icon>
            </div>
            <MKTypography variant="body2">Daily sync</MKTypography>
          </Grid>
          <Grid style={rowCenter} my={3} item>
            <div style={iconContainer}>
              <Icon fontSize="medium">local_pizza</Icon>
            </div>
            <MKTypography variant="body2">Volunteer in local community</MKTypography>
          </Grid>
          <Grid style={rowCenter} my={3} item>
            <div style={iconContainer}>
              <Icon fontSize="medium">home_work</Icon>
            </div>
            <MKTypography variant="body2">Friends outside of work</MKTypography>
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <Grid style={rowCenter} my={3} item>
            <div style={iconContainer}>
              <Icon fontSize="medium">date_range</Icon>
            </div>
            <MKTypography variant="body2">Intracompany committees</MKTypography>
          </Grid>
          <Grid style={rowCenter} my={3} item>
            <div style={iconContainer}>
              <Icon fontSize="medium">local_pizza</Icon>
            </div>
            <MKTypography variant="body2">Open door policy</MKTypography>
          </Grid>
          <Grid style={rowCenter} my={3} item>
            <div style={iconContainer}>
              <Icon fontSize="medium">home_work</Icon>
            </div>
            <MKTypography variant="body2">Open office floor plan</MKTypography>
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <Grid style={rowCenter} my={3} item>
            <div style={iconContainer}>
              <Icon fontSize="medium">date_range</Icon>
            </div>
            <MKTypography variant="body2">Pair programming</MKTypography>
          </Grid>
          <Grid style={rowCenter} my={3} item>
            <div style={iconContainer}>
              <Icon fontSize="medium">local_pizza</Icon>
            </div>
            <MKTypography variant="body2">Partners with Nonprofits</MKTypography>
          </Grid>
          <Grid style={rowCenter} my={3} item>
            <div style={iconContainer}>
              <Icon fontSize="medium">home_work</Icon>
            </div>
            <MKTypography variant="body2">Remote Work Program</MKTypography>
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <Grid style={rowCenter} my={3} item>
            <div style={iconContainer}>
              <Icon fontSize="medium">date_range</Icon>
            </div>
            <MKTypography variant="body2">Eat lunch together</MKTypography>
          </Grid>
        </Grid>
        <Grid container item xs={12} style={grayBg}>
          <MKTypography variant="h5" my={2} ml={2}>
            Diversity
          </MKTypography>
        </Grid>
        <Grid container item xs={12}>
          <Grid style={rowCenter} my={3} item>
            <div style={iconContainer}>
              <Icon fontSize="medium">diversity_3</Icon>
            </div>
            <MKTypography variant="body2">Dedicated Diversity/Inclusion Staff</MKTypography>
          </Grid>
        </Grid>
        <Grid container item xs={12} style={grayBg}>
          <MKTypography variant="h5" my={2} ml={2}>
            Health Insurance & Wellness Benefits
          </MKTypography>
        </Grid>
        <Grid container item xs={12}>
          <Grid style={rowCenter} my={3} item>
            <div style={iconContainer}>
              <Icon fontSize="medium">date_range</Icon>
            </div>
            <MKTypography variant="body2">Dental Benefits</MKTypography>
          </Grid>
          <Grid style={rowCenter} my={3} item>
            <div style={iconContainer}>
              <Icon fontSize="medium">local_pizza</Icon>
            </div>
            <MKTypography variant="body2">Disability Insurance</MKTypography>
          </Grid>
          <Grid style={rowCenter} my={3} item>
            <div style={iconContainer}>
              <Icon fontSize="medium">home_work</Icon>
            </div>
            <MKTypography variant="body2">Flexible Spending Account(FSA)</MKTypography>
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <Grid style={rowCenter} my={3} item>
            <div style={iconContainer}>
              <Icon fontSize="medium">date_range</Icon>
            </div>
            <MKTypography variant="body2">Health Insurance Benefits</MKTypography>
          </Grid>
          <Grid style={rowCenter} my={3} item>
            <div style={iconContainer}>
              <Icon fontSize="medium">local_pizza</Icon>
            </div>
            <MKTypography variant="body2">Life Insurance</MKTypography>
          </Grid>
          <Grid style={rowCenter} my={3} item>
            <div style={iconContainer}>
              <Icon fontSize="medium">home_work</Icon>
            </div>
            <MKTypography variant="body2">Vision Benefits</MKTypography>
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <Grid style={rowCenter} my={3} item>
            <div style={iconContainer}>
              <Icon fontSize="medium">date_range</Icon>
            </div>
            <MKTypography variant="body2">Wellness Programs</MKTypography>
          </Grid>
        </Grid>
        <Grid container item xs={12} style={grayBg}>
          <MKTypography variant="h5" my={2} ml={2}>
            Perks & Discounts
          </MKTypography>
        </Grid>
        <Grid container item xs={12}>
          <Grid style={rowCenter} my={3} item>
            <div style={iconContainer}>
              <Icon fontSize="medium">date_range</Icon>
            </div>
            <MKTypography variant="body2">Casual Dress</MKTypography>
          </Grid>
          <Grid style={rowCenter} my={3} item>
            <div style={iconContainer}>
              <Icon fontSize="medium">local_pizza</Icon>
            </div>
            <MKTypography variant="body2">Commuter Benefits</MKTypography>
          </Grid>
          <Grid style={rowCenter} my={3} item>
            <div style={iconContainer}>
              <Icon fontSize="medium">home_work</Icon>
            </div>
            <MKTypography variant="body2">Game Room</MKTypography>
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <Grid style={rowCenter} my={3} item>
            <div style={iconContainer}>
              <Icon fontSize="medium">date_range</Icon>
            </div>
            <MKTypography variant="body2">Parking</MKTypography>
          </Grid>
          <Grid style={rowCenter} my={3} item>
            <div style={iconContainer}>
              <Icon fontSize="medium">local_pizza</Icon>
            </div>
            <MKTypography variant="body2">Relocation Assistance</MKTypography>
          </Grid>
          <Grid style={rowCenter} my={3} item>
            <div style={iconContainer}>
              <Icon fontSize="medium">home_work</Icon>
            </div>
            <MKTypography variant="body2">Stocked Kitchen</MKTypography>
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <Grid style={rowCenter} my={3} item>
            <div style={iconContainer}>
              <Icon fontSize="medium">date_range</Icon>
            </div>
            <MKTypography variant="body2">Some Meals Provided</MKTypography>
          </Grid>
        </Grid>
        <BuiltByDevelopers />
        {/* <Grid container spacing={3} mt={6}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post1}
              title="Additional cards"
              description="Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover ..."
              action={{
                type: "internal",
                route: "#",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post2}
              title="Additional cards"
              description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
              action={{
                type: "internal",
                route: "#",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="Additional cards"
              description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
              action={{
                type: "internal",
                route: "#",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
              image={post4}
              title="Additional cards"
              description="Rather than worrying about switching offices every couple years, you stay in the same place."
              action={{
                type: "internal",
                route: "#",
                label: "read more",
              }}
            />
          </Grid>
        </Grid> */}
      </Container>
    </MKBox>
  );
}

export default Places;
