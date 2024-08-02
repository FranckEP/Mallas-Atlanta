import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineTheme, Paper, Title } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import Logo from "../../assets/Logos/logo.svg";
import Image1 from "../../assets/Carousel Images/1.png";
import Image2 from "../../assets/Carousel Images/2.png";
import Image3 from "../../assets/Carousel Images/3.png";
import './CarouselHome.css'

const data = [
  {
    image: Image1,
    text: "En Mallas Atlanta, tu seguridad es nuestra prioridad",
  },
  {
    image: Image2,
    text: "Seguridad y estilo, sin comprometer la estética de tu hogar",
  },
  {
    image: Image3,
    text: "Protege a tus seres queridos con nuestras mallas de seguridad",
  },
];

interface CardProps {
  image: string;
  text: string;
  icon: string;
}

function Card({ image, text, icon }: CardProps) {
  return (
    <Paper
      className="cardCarousel"
      style={{ backgroundImage: `url(${image})` }}
    >
      <Title className="cardTitle">{text}</Title>
      <img src={icon} alt="icon" className="cardIcon" />
    </Paper>
  );
}

const CarouselHomePage = () => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.lg})`);
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const slides = data.map((item, index) => (
    <Carousel.Slide key={index}>
      <Card icon={Logo} {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      withIndicators
      loop
      align="center"
      slidesToScroll={mobile ? 1 : 1}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      withControls={false}
      className="slide"
    >
      {slides}
    </Carousel>
  );
};

export default CarouselHomePage;
