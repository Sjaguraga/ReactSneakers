// import Signup from "./components/Signup/Signup.js";
// import Login from "./components/Login/Login.js";
import Sneakers from "./components/Sneakers/Sneakers";

import classes from "./App.module.css";

import MainHeader from "./components/MainHeader/MainHeader";

const sneakers = [
  {
    id: "s1",
    name: "Air Jordan 1 Retro High OG 'University Blue'",
    image: "https://cdn.flightclub.com/3000/TEMPLATE/172524/1.jpg",
    brand: "Air Jordan",
    price: 390,
    description:
      "Paying tribute to Michael Jordan's college alma mater, the Air Jordan 1 Retro High OG 'University Blue' features a University of North Carolina look. Built entirely with leather, the shoe's upper appears in a mix of white and University Blue, contrasted by black on the Swoosh, collar, laces and 'Wings' logo. Perforations on the toe box provide breathability, while underfoot, the Air midsole gives way to a concentric outsole with a brighter shade of blue.",
  },
  {
    id: "s2",
    name: "Air Jordan 1 Retro High OG 'Chicago' 2015",
    image: "https://cdn.flightclub.com/3000/TEMPLATE/010352/1.jpg",
    brand: "Air Jordan",
    price: 400,
    description:
      "The Air Jordan 1 Retro High OG 'Chicago' 2015 colorway features full-leather uppers in Bulls team colors. The 'Chicago' was first retroed in 1994 and stayed true to the 1985 design. Further retros were released in 2013 with small changes to the design, and again in 2015 with the original branding details: the Nike Air logo on the tongue and the original clean heel without the Jumpman logo.",
  },
  {
    id: "s3",
    name: "Dior X Air Jordan 1 High",
    image: "https://cdn.flightclub.com/3000/TEMPLATE/176533/1.jpg",
    brand: "Air Jordan",
    price: 10750,
    description:
      "Part of a collection between the fashion house and Jordan Brand, the Dior x Air Jordan 1 High released in April 2020. The shoe's Italian leather upper appears in a mix of white and grey, with a Dior Oblique jacquard Swoosh contrasting the side wall. The tongue tag and 'Wings' logo sport co-branding, with further branding revealed by the icy translucent outsole.",
  },
  {
    id: "s4",
    name: "Air Jordan 1 Retro High OG 'Bred' 2013",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/011845/1.jpg",
    brand: "Air Jordan",
    price: 600,
    description:
      "Banned by the NBA in 1985, Michael Jordan was charged $5,000 per game for wearing the Air Jordan 1 'Black/Red' because they didnt include the color white which was part of the Chicago Bulls official team colors. Used as a marketing tactic, Nike crafted the 'Banned' campaign around the sneakers to launch and promote the Air Jordan line. The sneaker was retroed in 1994, 2011, 2013 and 2016. The 2011 pair features an 'X' on the heel paying homage to the 'Banned' nickname",
  },
  {
    id: "s5",
    name: "Air Jordan 1 Retro High OG 'Royal' 2017",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/800564/1.jpg",
    brand: "Air Jordan",
    price: 509,
    description:
      "Chuck Kohn, a sports photographer, photographed Michael Jordan wearing the Air Jordan 1 Royal in 1985. Known as his favorite colorway, Jordan chose the Royals as the first Air Jordan 1 for purchase. They were also the only color-way he never wore on court out of the Top 3 Air Jordan 1 Retro colorways ('Banned' and 'Chicago'). The Royals were released in 1994, 2001, 2013, and 2017 since 1985",
  },
  {
    id: "s6",
    name: "Yeezy Boost 350 V2 'Zebra'",
    image: "https://cdn.flightclub.com/3000/TEMPLATE/800502/1.jpg",
    brand: "Adidas",
    price: 294,
    description:
      "The Yeezy Boost 350 V2 'Zebra' released on February 25, 2017, combining an upper white / core black Primeknit with a red SPLY 350 branding and a full-length translucent midsole boost. On November 16, 2018 and April 9th, 2022, restocks of the ' Zebra ' arrived, with more pairs hitting the marketplace and building on Kanye's commitment to make Yeezy more available to anyone who wished to acquire them.",
  },
  {
    id: "s7",
    name: "Yeezy Boost 700 'Wave Runner'",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/802501/1.jpg",
    brand: "Adidas",
    price: 355,
    description:
      "This first colorway of Yeezy Wave Runner 700 from Kanye West was introduced in November 2017, following an initial public opening in the Yeezy Season 5 fashion show previously that year. The retro-inspired lines of the sneaker worked together with a chunky silhouette reminiscent of a previous age. A mesh base on the quarter panel is completed in gray and a yellow with a teal forefoot.",
  },
  {
    id: "s8",
    name: "Air Yeezy 2 SP 'Red October'",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/090148/1.jpg",
    brand: "Nike",
    price: 14_718,
    description:
      "By the time the Air Yeezy 2 SP 'Red October' finally launched online with no advance notice in February 2014, Kanye West had already severed all ties with Nike. Though chaos surrounded the shoes much-delayed release, the Red Octobers stand out from its two companion colorways. There's the monochromatic scarlet finish, contrasted only by metallic gold lace tips, and there's the unique design, which sees the side panels ditch the standard anaconda texture in favor of rows upon rows of small triangular studs.",
  },
  {
    id: "s9",
    name: "Yeezy 500 'Blush'",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/803137/1.jpg",
    brand: "Adidas",
    price: 271,
    description:
      "The adidas YEEZY 500 “Blush” features uppers constructed of mesh, leather and suede that express a pale beige tone. The shoe is marked with minimal branding allowing the bulbous design to come through. Elevating the shoe are matching full-length adiPRENE midsoles paired with rubber outsoles.",
  },
  {
    id: "s10",
    name: "Yeezy Slides 'Resin'",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/160138/1.jpg",
    brand: "Adidas",
    price: 191,
    description:
      "The Yeezy Slides 'Resin' features a one-tone look on its bold slide construction. Built with EVA, the one-piece construction appears entirely in Resin, supported underfoot by a soft top layer on the footbed. The outsole sports prominent horizontal grooves to provide traction.",
  },
  {
    id: "s11",
    name: "Yeezy Foam Runner 'Vermilion'",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/266127/1.jpg",
    brand: "Adidas",
    price: 313,
    description:
      "The futuristic adidas Yeezy Foam Runner 'Vermilion' slip-on features a one-note scarlet finish to the clog-like silhouette, tying back to the first time that Kanye West introduced the familiar monochrome palette to his partnership with adidas. It features a sustainable build, highlighted by a single piece of foam made in part with hydroponically produced algae. Ventilation ports throughout the vamp and side panels offer more airflow, with the heel designed to cradle the back of the foot for a non-slip fit.",
  },
  {
    id: "s12",
    name: "Yeezy Foam Runner 'Mineral Blue'",
    image: "https://cdn.flightclub.com/1250/TEMPLATE/263700/1.jpg",
    brand: "Adidas",
    price: 664,
    description:
      "A progressive slip-on, the Yeezy Foam Runner 'Mineral Blue' emerges with a monochromatic look. Built with foam, the shoe's Mineral Blue upper includes ventilation ports throughout, allowing for breathability and less weight. A raised heel promotes a more natural stride, while underfoot, the outsole sports a wavy pattern for traction, also revealing the only branding via an adidas logo.",
  },
];

const App = () => {
  return (
    <div className={classes.app}>
      <MainHeader />
      <Sneakers items={sneakers} />
      {/* <Signup /> */}
      {/* <Login /> */}
    </div>
  );
};

export default App;
