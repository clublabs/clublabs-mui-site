// @mui material components
import Icon from "@mui/material/Icon";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Presentation from "layouts/pages/presentation";
import Work from "layouts/pages/work";

const routes = [
  {
    name: "Home",
    icon: <Icon>home</Icon>,
    route: "/pages/presentation",
    component: <Presentation />,
  },
  {
    name: "Work & Culture",
    icon: <Icon>diversity_3</Icon>,
    route: "/pages/work",
    component: <Work />,
  },
  {
    name: "About",
    icon: <Icon>perm_identity</Icon>,
    route: "/pages/landing-pages/about-us",
    component: <AboutUs />,
  },
  {
    name: "Contact us",
    icon: <Icon>contacts</Icon>,
    route: "/pages/landing-pages/contact-us",
    component: <ContactUs />,
  },
];

export default routes;
