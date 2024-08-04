import SampleProp from "./Sample Card Prop/SampleProp";
import image1 from "../../assets/Carousel Images/1.png"
import image2 from "../../assets/Carousel Images/2.png"
import image3 from "../../assets/Carousel Images/3.png"

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

const GallerySample = () => {
  return (
      <SampleProp images={images} title="Galería" navigationRef="/galeria" bgColor="#f0f4ff"/>
  );
};

export default GallerySample;
