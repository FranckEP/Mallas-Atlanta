import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineTheme, Paper } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import Logo from "../../../assets/Logos/logo.svg";
import classes from './CarouselProp.module.css';

interface CarouselPropProps {
  sectionTitle: string;
  images: Array<{ image: string}>;
}

interface CardProps {
  image: string;
  icon: string;
}

const Card: React.FC<CardProps> = ({ image, icon }) => {
  return (
    <Paper
      className={classes.cardCarousel}
      style={{ backgroundImage: `url(${image})` }}
    >
      <img src={icon} alt="icon" className={classes.cardIcon} />
    </Paper>
  );
};

const CarouselProp: React.FC<CarouselPropProps> = ({ sectionTitle, images }) => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.lg})`);
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const slides = images.map((item, index) => (
    <Carousel.Slide key={index}>
      <Card icon={Logo} image={item.image} />
    </Carousel.Slide>
  ));

  return (
    <div className={classes.section}>
      <div className={classes.sectionTitle}>{sectionTitle}</div>
      <Carousel
        withIndicators
        slideSize="33.333333%"
        slideGap="md"
        loop
        align="center"
        slidesToScroll={mobile ? 1 : 1}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {slides}
      </Carousel>
    </div>
  );
};

export default CarouselProp;

