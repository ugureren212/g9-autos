import './AboutContact.css';

function AboutContact() {
  return (
    <section id="about" className="about-contact">
      <div className="about-contact__container">
        <div className="about-contact__about">
          <h2 className="about-contact__heading">About G9 Autos</h2>
          <p>
            G9 Autos LTD is a trusted local garage providing professional auto parts and
            services. With years of experience in the trade, our skilled mechanics deliver
            reliable, high-quality vehicle maintenance, repairs, and servicing at competitive
            prices.
          </p>
          <p>
            From full services and brake replacements to engine rebuilds and DPF solutions,
            we handle it all. We take pride in honest, transparent work and treat every
            vehicle as if it were our own.
          </p>
        </div>

        <div className="about-contact__contact" id="contact">
          <h2 className="about-contact__heading">Get In Touch</h2>
          <p className="about-contact__address">Walthamstow, London, E17 6BH Unit 4</p>
          <div className="about-contact__phones">
            <a href="tel:07853901804">07853 901 804</a>
            <span className="about-contact__sep">|</span>
            <a href="tel:07718785217">07718 785 217</a>
          </div>
          <div className="about-contact__map">
            <iframe
              title="G9 Autos Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.5!2d-0.038073!3d51.5910345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d94d1fc4b67%3A0x1234567890abcdef!2s59+Sutherland+Rd%2C+London+E17+6BH!5e0!3m2!1sen!2suk!4v1710000000000"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutContact;
