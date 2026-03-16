import { useCarousel } from '../hooks/useCarousel';
import './WorkAndServices.css';

const IMAGES = [
  { src: '/img/pic1.03a5c677.jpeg', alt: 'Mechanic working on vehicle' },
  { src: '/img/pic2.8f53bd77.jpeg', alt: 'Engine repair in progress' },
  { src: '/img/pic3.e450ea57.jpeg', alt: 'Vehicle maintenance work' },
  { src: '/img/pic4.f4a8cf8d.jpeg', alt: 'Auto parts service' },
  { src: '/img/pic5.fbf44f94.jpeg', alt: 'Professional car repair' },
  { src: '/img/pic6.9b7657a1.jpeg', alt: 'Skilled mechanics at work' },
  { src: '/img/pic7.6e6c1d8b.jpeg', alt: 'Quality auto service' },
];

const SERVICES = [
  { icon: '🔧', name: 'Full Service', description: 'Complete vehicle health check and maintenance' },
  { icon: '🛞', name: 'Brake Pads', description: 'Brake pad inspection, repair, and replacement' },
  { icon: '⚙️', name: 'Clutch', description: 'Clutch repair and replacement for all vehicles' },
  { icon: '🔩', name: 'Engine Rebuild', description: 'Full engine rebuild and reconditioning' },
  { icon: '⛓️', name: 'Timing Belts', description: 'Timing belt inspection and replacement' },
  { icon: '🔗', name: 'Timing Chain', description: 'Timing chain service and replacement' },
  { icon: '💨', name: 'DPF', description: 'DPF delete, cleaning, and remapping services' },
  { icon: '🚗', name: 'Pick & Drop Off', description: 'Convenient vehicle collection and delivery' },
];

function getVisibleServices(current) {
  const prev = (current - 1 + SERVICES.length) % SERVICES.length;
  const next = (current + 1) % SERVICES.length;
  return [
    { ...SERVICES[prev], isActive: false },
    { ...SERVICES[current], isActive: true },
    { ...SERVICES[next], isActive: false },
  ];
}

function WorkAndServices() {
  const imageCarousel = useCarousel(IMAGES.length, 4000);
  const serviceCarousel = useCarousel(SERVICES.length, 3000);
  const visibleServices = getVisibleServices(serviceCarousel.current);

  return (
    <section id="services" className="work-services">
      {/* Services carousel */}
      <div className="work-services__block work-services__block--wide">
        <div className="svc-wrap">
          <div className="svc">
            <button className="svc__arrow" onClick={serviceCarousel.prev} aria-label="Previous service">
              <span aria-hidden="true">&#8249;</span>
            </button>
            <div className="svc__cards">
              {visibleServices.map((service) => (
                <div
                  key={service.name}
                  className={`svc__card ${service.isActive ? 'svc__card--active' : ''}`}
                >
                  <span className="svc__icon">{service.icon}</span>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
            <button className="svc__arrow" onClick={serviceCarousel.next} aria-label="Next service">
              <span aria-hidden="true">&#8250;</span>
            </button>
          </div>
          <div className="svc__progress">
            <div
              className="svc__progress-bar"
              style={{ width: `${((serviceCarousel.current + 1) / SERVICES.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Image carousel */}
      <div className="work-services__block" id="gallery">
        <div className="carousel">
          <button className="carousel__btn carousel__btn--prev" onClick={imageCarousel.prev} aria-label="Previous image">
            <span aria-hidden="true">&#8249;</span>
          </button>
          <div className="carousel__track">
            {IMAGES.map((image, index) => (
              <div
                key={image.src}
                className={`carousel__slide ${index === imageCarousel.current ? 'active' : ''}`}
              >
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
          <button className="carousel__btn carousel__btn--next" onClick={imageCarousel.next} aria-label="Next image">
            <span aria-hidden="true">&#8250;</span>
          </button>
          <div className="carousel__dots">
            {IMAGES.map((_, index) => (
              <button
                key={index}
                className={`carousel__dot ${index === imageCarousel.current ? 'active' : ''}`}
                onClick={() => imageCarousel.goTo(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkAndServices;
