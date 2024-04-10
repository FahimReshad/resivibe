const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content mt-10 text-xl font-poppins font-semibold">
      <aside className="mt-14">
        <h2 className="text-3xl">ResiVibe</h2>
        <p>Providing reliable tech since 1992</p>
      </aside>
      <nav>
        <h6 className="footer-title">Home</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Services</a>
        <a className="link link-hover">Properties</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <h6 className="footer-title">Support</h6>
        <a className="link link-hover">How it Work</a>
        <a className="link link-hover">Favorites</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Cookie policy</a>
        <a className="link link-hover">FAQ Page</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Terms & Condition</a>
      </nav>
    </footer>
  );
};

export default Footer;
