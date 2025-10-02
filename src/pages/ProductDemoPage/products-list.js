// Action buttons
const ACTION_BUTTONS = {
  AR: { label: "See in your environment" },
  TRY_ON: { label: "Live Try On" },
  CONFIGURE_AI: { label: "Try Outfit with AI" },
};

// Products
const glasses = {
  title: "Ray-Ban RB4340 601 Wayfarer",
  subtitle: "Ray-Ban sunglasses",
  description:
    "Descubre el estilo icónico de los Ray-Ban RB4340 601 Wayfarer, un par de gafas de sol que nunca pasan de moda. Con una montura de color negro hecha de resistente nylon, estos lentes ofrecen una combinación perfecta de durabilidad y elegancia. Las lentes de color verde están fabricadas con vidrio, garantizando una visión clara y una protección óptima contra los rayos solares.",
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
};

const helmet = {
  title: "Helmet",
  description:
    "Descubre el estilo icónico de Helmet, un par de gafas de sol que nunca pasan de moda. Con una montura de color negro hecha de resistente nylon, estos lentes ofrecen una combinación perfecta de durabilidad y elegancia. Las lentes de color verde están fabricadas con vidrio, garantizando una visión clara y una protección óptima contra los rayos solares.",
  price: 31550,
  action: ACTION_BUTTONS.TRY_ON,
};

const officeChair = {
  title: "Office chair",
  description: "lorem  ipsum",
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
};

const jacket = {
  title: "Jacket",
  description: "Lorem",
  price: 31550,
  action: ACTION_BUTTONS.CONFIGURE_AI,
  content: () => import("../../components/OutfitTryOn/OutfitTryOn.jsx"),
};

const dummyProduct = {
  title: "Helmet",
  description:
    "Descubre el estilo icónico de Helmet, un par de gafas de sol que nunca pasan de moda. Con una montura de color negro hecha de resistente nylon, estos lentes ofrecen una combinación perfecta de durabilidad y elegancia. Las lentes de color verde están fabricadas con vidrio, garantizando una visión clara y una protección óptima contra los rayos solares.",
  price: 31550,
  isDummy: true,
};

export const productList = [
  glasses,
  helmet,
  officeChair,
  jacket,
  dummyProduct,
  dummyProduct,
  dummyProduct,
  dummyProduct,
  dummyProduct,
  dummyProduct,
];
