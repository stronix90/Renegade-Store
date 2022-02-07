const Footer = () => {
  const icons = [
    { icon: "fab fa-facebook-f", url: "#!" },
    { icon: "fab fa-twitter", url: "#!" },
    { icon: "fab fa-google", url: "#!" },
    { icon: "fab fa-instagram", url: "#!" },
    { icon: "fab fa-linkedin", url: "#!" },
    { icon: "fab fa-github", url: "#!" }
  ];

  return (
    <footer
      className="fixed-bottom text-center text-white"
      style={{
        background: "var(--neutral500)",
        position: "relative",
        bottom: "0",
      }}
    >
      <div className="container pt-4">
        <section className="mb-4">
          {icons.map((element, index) => {
            return (
              <a key={index}
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href={element.url}
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className={element.icon} />
              </a>
            );
          })}
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <span>
          © 2022 Copyright <b>Renegade Store</b>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
