import { Container, Group, Image} from "@mantine/core";
import facebook from "../../assets/Social Icons/facebook.png";
import instagram from "../../assets/Social Icons/instagram.png";
import whatsapp from "../../assets/Social Icons/whatsapp.png";
import gmail from "../../assets/Social Icons/gmail.webp";
import Logo from '../../assets/Logos/logo.svg'
import classes from './Footer.module.css'


const Footer = () => {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Image src={Logo} className={classes.logo} alt="Mallas Atlanta Logo"/>
        <Group className={classes.links}>
            <a href="mailto:eidergarcia02@gmail.com" aria-label="Send an email to Eider Garcia">
              <img src={gmail} alt="Gmail" className={classes.socialicon} />
            </a>
            <a href="https://wa.me/3017396799" aria-label="Chat with us on WhatsApp">
              <img src={whatsapp} alt="WhatsApp" className={classes.socialicon} />
            </a>
            <a href="https://www.instagram.com/mallasatlanta020982/" aria-label="Follow us on Instagram">
              <img src={instagram} alt="Instagram" className={classes.socialicon} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100086240296984&mibextid=ZbWKwL" aria-label="Follow us on Facebook">
              <img src={facebook} alt="Facebook" className={classes.socialicon} />
            </a>
        </Group>
      </Container>
      <div className={classes.copyright}>&copy; {new Date().getFullYear()} Mallas Atlanta</div>
    </div>
  )
}

export default Footer