import SampleProp from "./Sample Card Prop/SampleProp";

const images = [
  {
    src: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png",
    alt: "Image 1",
  },
  {
    src: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png",
    alt: "Image 2",
  },
  {
    src: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png",
    alt: "Image 3",
  }
];

const GallerySample = () => {
  return (
      <SampleProp images={images} title="Galería" navigationRef="/galeria" bgColor="#f0f4ff"/>
  );
};

export default GallerySample;
