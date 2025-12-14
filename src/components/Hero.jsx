function Hero() {
  const handleClick = () => {
    const contactSection = document.querySelector('#contact');
    contactSection.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <h1>Welcome to Fortecon</h1>
        <p>Harness the Power of the Sun for a Sustainable Future</p>
        <button className="cta-button" onClick={handleClick}>
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Hero;
