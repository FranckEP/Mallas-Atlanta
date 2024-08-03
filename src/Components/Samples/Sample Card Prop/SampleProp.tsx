import React from "react";
import { Box, Image, Button } from "@mantine/core";
import classes from "./SampleProp.module.css";
import { useNavigate } from "react-router-dom";

interface SamplePropProps {
  images: { src: string; alt: string }[];
  title: string;
  navigationRef: string;
  bgColor: string;
}

const SampleProp: React.FC<SamplePropProps> = ({ images, title, navigationRef, bgColor}) => {
  const navigate = useNavigate();

  return (
    <div className={classes.sampleContainer} style={{ backgroundColor: bgColor }}>
      <div className={classes.sampleTitle}>{title}</div>
      <div className={classes.imageGrid}>
        {images.slice(0, 3).map((image, index) => (
          <Box key={index} className="image-box">
            <Image src={image.src} alt={image.alt} width="100%" height="100%" fit="cover" className="image"/>
          </Box>
        ))}
      </div>
      <Button className={classes.sampleButton} onClick={() => navigate(navigationRef)}>
        Ver más
      </Button>
    </div>
  );
};

export default SampleProp;