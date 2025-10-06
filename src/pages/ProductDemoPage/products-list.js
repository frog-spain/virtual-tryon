// Action buttons
const ACTION_BUTTONS = {
  AR: { label: "See in your environment" },
  TRY_ON: { label: "Live Try On" },
  CONFIGURE_AI: { label: "Try Outfit with AI" },
};

// Products
const glasses = {
  title: "Sunglasses",
  subtitle: "Tom Ford Bronson",
  description:
    "Tom Ford Sunglasses are the ultimate fashion accessory. Stunningly beautiful, innovative yet essentially classic, flawless, imaginative, unique. This super-stylish, one-of-a-kind, coloured Shiny Black model was designed and manufactured to perfection by Tom Ford in partnership with Italian producer Marcolin. An ideal choice for Man, the Tom Ford FT1044 01E are a thing of absolute beauty and timeless elegance. Check out all the latest models and designs in the new Tom Ford Sunglasses 2025 collection!",
  price: 16200,
  action: ACTION_BUTTONS.TRY_ON,
  content: () => import("../MediaPipe3DPage"),
  imgBaseUrl: "/assets/images/glasses-product",
  images: [
    "/assets/images/glasses-product/1.png",
    "/assets/images/glasses-product/2.png",
    "/assets/images/glasses-product/3.png",
    "/assets/images/glasses-product/4.png",
    "/assets/images/glasses-product/5.png",
  ],
  thumbnail: "/assets/images/glasses-product/4.png",
};

const helmet = {
  title: "Helmet",
  subtitle: "Shark Ridill Helmet",
  description:
    "Shark Ridill 2 Blank Helmet Matt Black. It is the second generation of the Ridill model, approved according to the new ECE 22.06 regulations. Integral helmet with a sporty design made of injected polycarbonate with an internal sun visor. Its compact, modern and subtly sporty design with its vents and spoiler, is the image of Shark racing DNA. It has been designed to live one of the most comfortable riding experiences. It can be used in any type of driving.",
  price: 15200,
  action: ACTION_BUTTONS.TRY_ON,
  imgBaseUrl: "/assets/images/helmet-product",
  images: [
    "/assets/images/helmet-product/1.png",
    "/assets/images/helmet-product/2.png",
    "/assets/images/helmet-product/3.png",
    "/assets/images/helmet-product/4.png",
    "/assets/images/helmet-product/5.png",
  ],
  thumbnail: "/assets/images/helmet-product/4.png",
};

const officeChair = {
  title: "Office chair",
  subtitle: "Swivel chair,",
  description:
    "Generous padding in the seat and backrest makes this chair a great choice if you want to sit comfortably at the desk. The shape of the armrests provides good support and helps you find a good sitting position. This swivel chair has functions that allow you to easily adapt the chair to your body. Adjust the chair’s height by pushing the button below the seat. Washable – Removable covers make cleaning easy and keep the chair fresh.",
  price: 24000,
  action: ACTION_BUTTONS.AR,
  content: () => import("../../components/ModelViewer3D/ModelViewer3D.jsx"),
  contentProps: {
    model: "chair.glb",
    variants: [
      { name: "Default", color: "#000000" },
      { name: "Variant 2", color: "#341c11" },
      { name: "Variant 3", color: "#dbdcde" },
      { name: "Variant 4", color: "#470c0b" },
      { name: "Variant 5", color: "#2d2d2d" },
      { name: "Variant 6", color: "#a37845" },
    ],
  },
  imgBaseUrl: "/assets/images/chair-product",
  images: [
    "/assets/images/chair-product/1.png",
    "/assets/images/chair-product/2.png",
    "/assets/images/chair-product/3.png",
    "/assets/images/chair-product/4.png",
    "/assets/images/chair-product/5.png",
  ],
  thumbnail: "/assets/images/chair-product/3.png",
};

const jacket = {
  title: "Jacket",
  subtitle: "Padded cotton flight jacket",
  description:
    "This season, the classic flight jacket is reimagined for modern city life. Made from hard-wearing cotton, this version is designed with a chunky ribbed collar that zips into a funnel neck and has a padded lining for extra insulation. It features double-entry pockets at the chest and an internal pocket inside. Shell: 65% Cotton, 35% Polyamide (Nylon). Lining: 100% TENCEL™ Lyocell. Padding: 100% Recycled polyester. Excluding trims / Machine wash.",
  price: 18000,
  action: ACTION_BUTTONS.CONFIGURE_AI,
  content: () =>
    import("../../components/product-page-modals/JacketModalContent.jsx"),
  imgBaseUrl: "/assets/images/jacket-product",
  images: [
    "/assets/images/jacket-product/1.png",
    "/assets/images/jacket-product/2.png",
    "/assets/images/jacket-product/3.png",
    "/assets/images/jacket-product/4.png",
    "/assets/images/jacket-product/5.png",
  ],
  thumbnail: "/assets/images/jacket-product/3.png",
};

const dummyProduct = {
  title: "Helmet",
  description: "Dummy Product",
  price: 30000,
  isDummy: true,
};

export const productList = [
  glasses,
  helmet,
  jacket,
  officeChair,
  dummyProduct,
  dummyProduct,
  dummyProduct,
  dummyProduct,
];
