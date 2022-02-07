import "./information.css"

const Information = () => {
  return (
      <div
        className="itemCard information container">
        <div className="row g-4 py-3 row-cols-1 row-cols-lg-3">
          <div className="col d-flex align-items-start text-center justify-content-center">
            <div className="row">
              <h3><i className="fas fa-phone h4 pe-4"></i>VENTA TELEFÓNICA</h3>
              <p>(11)22509037</p>
            </div>
          </div>

          <div className="col d-flex align-items-start text-center justify-content-center">
            <div className="row">
              <h3><i className="far fa-clock h4 pe-4"></i>HORARIOS</h3>
              <p>
                Lunes a viernes de 9:30 a 18:30 hs. <br />
                Sábados de 10 a 13 hs.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start text-center justify-content-center">
            <div className="row">
              <h3><i className="fab fa-whatsapp h4 pe-4"></i>CONSULTAS</h3>
              <p>(911) 20509037</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Information;
