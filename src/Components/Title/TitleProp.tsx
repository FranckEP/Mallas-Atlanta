import React from 'react';
import classes from "./Title.module.css";
import bg from "../../assets/Backgrounds/bgprodgall.png"

interface TitlePropProps {
  text: string;
}

const TitleProp: React.FC<TitlePropProps> = ({text}) => {
  return (
    <div>
      <div className={classes.imageContainer}>
        <img src={bg} alt="Background" className={classes.bgImage} />
        <div className={classes.textOverlay}>{text}</div>
      </div>
    </div>
  );
};

export default TitleProp;
