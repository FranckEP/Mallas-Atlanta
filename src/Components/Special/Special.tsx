import { Image} from "@mantine/core";
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
      <div className={classes.cardText}>{text}</div>
    </div>
  );
}
const Special = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.textTitle}>¿Qué nos hace especial?</div>
      <div className={classes.flexContainer}>
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Special;
