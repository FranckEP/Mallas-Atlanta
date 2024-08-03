import { Image, Text } from "@mantine/core";
import asesoria from "../../assets/Icons Special/asesoria-personalizada.png";
import guarantee from "../../assets/Icons Special/guarantee.png";
import innovation from "../../assets/Icons Special/innovation.png";
import maintenance from "../../assets/Icons Special/maintenance.png";
import classes from "./Special.module.css";

const data = [
  {
    image: asesoria,
    text: "Asesoria Personalizada",
  },
  {
    image: guarantee,
    text: "Garantía Extendida",
  },
  {
    image: innovation,
    text: "Innovación Contínua",
  },
  {
    image: maintenance,
    text: "Mantenimiento Progresivo",
  },
];

interface CardProps {
  image: string;
  text: string;
}
function Card({ image, text }: CardProps) {
  return (
    <div className={classes.cardContainer}>
      <Image src={image} alt={text} className={classes.imageIcon} />
      <Text className={classes.cardText}>{text}</Text>
    </div>
  );
}
const Special = () => {
  return (
    <div className={classes.mainContainer}>
      <Text className={classes.textTitle}>¿Qué nos hace especial?</Text>
      <div className={classes.flexContainer}>
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Special;
