import { Center } from "@mantine/core";
import classes from "./Us.module.css";

const Us = () => {
  return (
    <Center
      className={classes.centerStyle}
    >
      <div className={classes.title}>
        ¿Quiénes somos?
      </div>
      <p className={classes.paragraph}
      >
        En Mallas Atlanta, somos más que una empresa de seguridad; somos tus
        aliados en proteger lo que más valoras. Desde nuestros inicios,
        ofrecemos soluciones innovadoras y de alta calidad que brindan
        tranquilidad a miles de hogares. Creemos que la seguridad no debe ser
        una preocupación, sino una garantía. Adaptamos nuestras soluciones para
        proteger a tus niños, mantener a tus mascotas seguras y brindarte la
        tranquilidad que mereces.
      </p>
      <div className={classes.phrase}>
        Confía en nosotros para hacer de tu hogar un lugar seguro y armonioso.
        ¡Tu tranquilidad es nuestra prioridad!
      </div>
    </Center>
  );
};

export default Us;
