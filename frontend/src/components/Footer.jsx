const Footer = () => {

  return (
    <footer className="bg-dark text-light py-3 mt-5">
      <div className="container text-center">
        <p className="mb-0">
          Personal Finance Tracker © {new Date().getFullYear()}
        </p>

        <small>
          Developed by Riza Kaja
        </small>
      </div>
    </footer>
  );
};

export default Footer;