import { Flex } from "@mantine/core";
import CountUp from "react-countup";
import Us from "./Us";
import classes from "./Counter.module.css";

interface CounterProps {
  count: number;
  label: string;
}

const Counter: React.FC<CounterProps> = ({ count, label }) => {
  return (
    <div className={classes.counter}>
      <span className={classes.counterValue}>
        <CountUp end={count} duration={5} suffix="+" />
      </span>
      <div className={classes.counterLabel}>{label}</div>
    </div>
  );
};

const Information = () => {
  const countYears = 8;
  const countClients = 500;
  const countHome = 600;

  return (
    <div className={classes.containerInformation}>
      <Us />
      <Flex gap="xs" justify="center" align="center" direction="row">
        <Counter count={countYears} label="Años de experiencia" />
        <Counter count={countClients} label="Clientes satisfechos" />
        <Counter count={countHome} label="Hogares seguros" />
      </Flex>
    </div>
  );
};

export default Information;
