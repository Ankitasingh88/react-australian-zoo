import styles from "./Footer.module.css";

import {
  FacebookLogo,InstagramLogo,TwitterLogo,Phone,Envelope
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>

        <div className={styles.footerContainer}>

        <div className={styles.footerSection}>
          <h3>FOLLOW US</h3>
          <p>
          <FacebookLogo size={32} />
          <InstagramLogo size={32} />
          <TwitterLogo size={32} />
          <Phone size={32} />
          <Envelope size={32} />
          </p> 
        </div>

        <div className={styles.footerContact}>
              <h3>Contact Us </h3>
              <p>About US</p>
              <p>Carrers</p>
              <p>Private Policy</p>
              <p>(123) 764-532321</p>  
        </div>

         <div className={styles.footerTiming}>
              <h3>Visiting Time</h3>
              <p>Monday - Friday: 9 AM - 5 PM</p>
              <p>Saturday - Sunday: 8 AM - 4 PM</p>
          </div>
        </div>

        <div className={styles.footerBottom}>
        <p >@copy; 2025 Paradise-Zoo Website. All rights reserved.</p>
        </div>
        
      </footer>
    </>
  );
};

export default Footer;