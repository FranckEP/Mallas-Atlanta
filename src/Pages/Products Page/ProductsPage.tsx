import ProductsProp from "../../Components/Products/Products Prop/ProductsProp";
import TitleProp from "../../Components/Title/TitleProp";
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

const ProductsPage = () => {
  return (
    <div>
      <TitleProp text='Productos'/>
      <ProductsProp images={images} title='' bgColor="none"/>
    </div>
  );
};

export default ProductsPage;
