// Action buttons
const ACTION_BUTTONS = {
  AR: { label: "See in your environment" },
  TRY_ON: { label: "Live Try On" },
  CONFIGURE: { label: "Configure in 3D" },
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
  dummyProduct,
  dummyProduct,
  dummyProduct,
  dummyProduct,
  dummyProduct,
  dummyProduct,
];
