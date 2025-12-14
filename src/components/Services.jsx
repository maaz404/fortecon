import { useEffect, useRef } from 'react';

function Services() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    cardsRef.current.forEach((card) => {
      if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
      }
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const services = [
    {
      title: 'Solar Panel Installation',
      description: 'Professional installation of high-quality solar panels for residential and commercial properties.',
    },
    {
      title: 'Energy Consultation',
      description: 'Expert consultation to determine the best solar solution for your specific energy needs.',
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance and support to keep your solar system running at peak efficiency.',
    },
    {
      title: 'Battery Storage',
      description: 'Integrated battery storage solutions to maximize your solar energy usage and independence.',
    },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
