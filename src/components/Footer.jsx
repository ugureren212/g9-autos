import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <span className="footer__label">Contact Us</span>
        <span className="footer__item">
          <a href="tel:07853901804">07853 901 804</a>
          <span className="footer__sep">|</span>
          <a href="tel:07718785217">07718 785 217</a>
        </span>
        <span className="footer__sep footer__sep--mid">|</span>
        <span className="footer__item">
          <a href="mailto:info@g9autoltd.com">info@g9autoltd.com</a>
        </span>
        <span className="footer__sep footer__sep--mid">|</span>
        <span className="footer__item footer__address">
          Walthamstow, London, E17 6BH Unit 4
        </span>
      </div>
    </footer>
  );
}

export default Footer;
