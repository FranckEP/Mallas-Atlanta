import ProductsProp from "../Products/Products Prop/ProductsProp";
import image1 from "../../assets/ProdImages/1.svg"
import image2 from "../../assets/ProdImages/2.svg"
import image3 from "../../assets/ProdImages/3.svg"
const images = [
  {
    src: image1,
    alt: "Image 1",
  },
  {
    src: image2,
    alt: "Image 2",
  },
  {
    src: image3,
    alt: "Image 3",
  }
];

const ProductsSample = () => {
  return (
      <ProductsProp images={images} title='Productos' bgColor="none"/>
  );
};

export default ProductsSample;