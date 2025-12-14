function NotFound() {
  return (
    <div className="error-page">
      <div className="error-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you're looking for doesn't exist or has been moved.</p>
        <a href="/" className="home-button">
          Return to Home
        </a>
      </div>
    </div>
  );
}

export default NotFound;
