// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logo from "assets/images/logo.svg";

const date = new Date().getFullYear();

export default {
  brand: {
    image: logo,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/ClubLabs/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/ClublabsI",
    },
    {
      icon: <GitHubIcon />,
      link: "#",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/AAA",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "#" },
        // { name: "freebies", href: "https://www.creative-tim.com/templates/free" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "Work & Culture", href: "#" },
        // { name: "bits & snippets", href: "https://www.creative-tim.com/bits" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "#" },
        { name: "careers", href: "#" },
        // { name: "custom development", href: "https://services.creative-tim.com/" },
      ],
    },
    // {
    //   name: "legal",
    //   items: [
    //     { name: "terms & conditions", href: "#" },
    //     { name: "privacy policy", href: "https://www.creative-tim.com/privacy" },
    //     { name: "licenses (EULA)", href: "https://www.creative-tim.com/license" },
    //   ],
    // },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Clublabs{" "}
      <MKTypography
        component="a"
        href="#"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        .
      </MKTypography>
    </MKTypography>
  ),
};
