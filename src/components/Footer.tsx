const Footer = () => {
  return (
    <footer
      className="text-center text-lg-start bg-body-tertiary text-muted p-1"
      data-bs-theme="dark"
    >      
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Eric Moura
              </h6>
              <p>
                Graduado pela ETEC e estudante da FATEC. Possuo conhecimentos em
                lógica de programação, desenvolvimento de sistemas e programação
                orientada a objetos.
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contato</h6>
              <p>
                <i className="fas fa-home me-3"></i> 
                <a href="https://github.com/Wr3tchedTorch">Github</a>
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                <a href="https://www.instagram.com/ericericeri_/">Instagram</a>
              </p>
              <p>
                <i className="fas fa-phone me-3"></i>
                <a href="https://www.linkedin.com/in/eric-moura-368b4724b/">Linkedin</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright
      </div>
    </footer>
  );
};

export default Footer;
