import React from "react";
import { Box, Image} from "@mantine/core";
import classes from "./Products.module.css";

interface ProductsPropProps {
  images: { src: string; alt: string }[];
  title: string;
  bgColor: string;
}

const ProductsProp: React.FC<ProductsPropProps> = ({ images, title, bgColor}) => {

  return (
    <div className={classes.sampleContainer} style={{ backgroundColor: bgColor }}>
      <div className={classes.sampleTitle}>{title}</div>
      <div className={classes.imageGrid}>
        {images.slice(0, 3).map((image, index) => (
          <Box key={index} className={classes.imageBox}>
            <Image src={image.src} alt={`Gallery Image ${index + 1}`} className={classes.image} />
          </Box>
        ))}
      </div>
    </div>
  );
};

export default ProductsProp;