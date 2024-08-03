import { useEffect, useState } from "react";
import { Group, Burger, Image, Drawer} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Logo from "../../assets/Logos/logo.svg";
import classes from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";

const links = [
  { link: "/nosotros", label: "Nosotros" },
  { link: "/galeria", label: "Galeria" },
  { link: "/productos", label: "Productos" },
  { link: "/contactanos", label: "Contáctanos" },
];

const Header = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(links[0].link);
  const [opened, { toggle }] = useDisclosure();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    navigate("/nosotros");
  }, [navigate]);

  const items = links.map((linkes) => (
    <Link
      key={linkes.label}
      aria-current="page"
      to={linkes.link}
      className={classes.link}
      data-active={active === linkes.link || undefined}
      onClick={() => {
        setActive(linkes.link);
      }}
    >
      {linkes.label}
    </Link>
  ));

  const DropdownMenu = () => {
    return (
      <>
        <Burger
          hiddenFrom="sm"
          size="sm"
          color="red"
          opened={opened}
          onClick={toggle}
        />
        <Drawer
          offset={8}
          radius={8}
          position="right"
          opened={opened}
          onClose={toggle}
          title={
            <Image
              src={Logo}
              className={classes.logo}
              style={{ display: 'block', margin: '0 auto' }}
              onClick={() => navigate("/")}
            />
          }
          padding="md"
          size="60%"
          zIndex={1100}
          overlayProps={{
            backgroundOpacity: 0.55,
            blur: 3,
          }}
        >
          {items}
        </Drawer>
      </>
    );
  };
  return (
    <header
      className={`${classes.header} ${isScrolled ? classes.transparent : ""}`}
    >
      <Image
        src={Logo}
        className={classes.logo}
        onClick={() => navigate("/")}
      />
      <Group gap={10} visibleFrom="sm">
        {items}
      </Group>
      <DropdownMenu />
    </header>
  )
}

export default Header