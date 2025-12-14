function About() {
  const stats = [
    { value: '500+', label: 'Systems Installed' },
    { value: '10+ Years', label: 'Industry Experience' },
    { value: '98%', label: 'Customer Satisfaction' },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Fortecon</h2>
        <p>
          Fortecon is a leading provider of solar energy solutions, dedicated to
          helping homeowners and businesses transition to clean, renewable
          energy. With over a decade of industry expertise, we deliver
          high-quality installations and exceptional customer service.
        </p>
        <div className="stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
