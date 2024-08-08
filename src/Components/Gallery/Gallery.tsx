import image1 from "../../assets/Carousel Images/1.png";
import CarouselProp from "./Carousel Prop/CarouselProp";

const data = [
  {
    image: image1,
  },
  {
    image:
      "https://png.pngtree.com/background/20230524/original/pngtree-sad-pictures-for-desktop-hd-backgrounds-picture-image_2705986.jpg",
  },
  {
    image:
      "https://png.pngtree.com/background/20230524/original/pngtree-sad-pictures-for-desktop-hd-backgrounds-picture-image_2705986.jpg",
  },
  {
    image:
      "https://png.pngtree.com/background/20230524/original/pngtree-sad-pictures-for-desktop-hd-backgrounds-picture-image_2705986.jpg",
  },
  {
    image:
      "https://png.pngtree.com/background/20230524/original/pngtree-sad-pictures-for-desktop-hd-backgrounds-picture-image_2705986.jpg",
  },
  {
    image:
      "https://png.pngtree.com/background/20230524/original/pngtree-sad-pictures-for-desktop-hd-backgrounds-picture-image_2705986.jpg",
  },
  {
    image:
      "https://png.pngtree.com/background/20230524/original/pngtree-sad-pictures-for-desktop-hd-backgrounds-picture-image_2705986.jpg",
  },
];

const GalleryContent = () => {
  return (
    <div>
      <CarouselProp sectionTitle="Ventanas" images={data} />
      <CarouselProp sectionTitle="Ventanales" images={data} />
      <CarouselProp sectionTitle="Balcones" images={data} />
    </div>
  );
};

export default GalleryContent;
