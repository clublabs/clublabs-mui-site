// import imagesPrefix from "assets/images/gray-box.png";
import ux from "assets/images/ux.jpg";
import eng from "assets/images/engineers.jpg";
import qa from "assets/images/qa.jpg";
import product from "assets/images/product.jpg";
import devop from "assets/images/devop.jpg";
import seo from "assets/images/seo.jpg";

export default [
  {
    title: "A day in the life of Clublabs",
    description: "Hear from our employees and explore what a day at clublabs looks like.",
    items: [
      {
        image: `${ux}`,
        name: "UX",
        route: "#",
      },
      {
        image: `${eng}`,
        name: "Engineers",
        // count: 14,
        route: "#",
      },
      {
        image: `${qa}`,
        name: "QA",
        // count: 8,
        route: "#",
      },
      {
        image: `${product}`,
        name: "Product",
        // count: 1,
        route: "#",
      },
      {
        image: `${devop}`,
        name: "Dev Ops",
        // count: 11,
        route: "#",
      },
      {
        image: `${seo}`,
        name: "SEO",
        // count: 11,
        route: "#",
      },
    ],
  },
];
