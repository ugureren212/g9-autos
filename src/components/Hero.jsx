import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          G9 <span className="hero__title--gold">Autos</span> LTD
        </h1>
        <p className="hero__tagline">Auto Parts & Services</p>
        <div className="hero__divider"></div>
        <p className="hero__subtitle">
          Professional vehicle maintenance, repairs, and servicing you can trust
        </p>
        <p className="hero__address">Walthamstow, London, E17 6BH Unit 4</p>
        <a href="#contact" className="hero__cta">Get In Touch</a>
      </div>
    </section>
  );
}

export default Hero;
