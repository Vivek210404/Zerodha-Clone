export default function DematAccount() {
  return (
    <div
      className="container-fluid text-center p-5 mt-5"
      style={{ backgroundColor: "#FAFAFB" }}
    >
      <h2 className="mb-4 fs-3">Steps to open a demat account with Zerodha</h2>

      <div className="row align-items-center px-5">
        <div className="col-6">
          <img
            src="/images/steps-acop.svg"
            alt="step-acop img"
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>

        <div className="col-6 text-start mt-5 ">
          <ol className="list-unstyled">
            <li className="mb-2 d-flex align-items-center border-bottom">
              <span
                className="d-inline-flex justify-content-center align-items-center border rounded-circle my-3 fw-semibold"
                style={{ width: "50px", height: "50px" }}
              >
                01
              </span>
              <span className="ms-3 steps fw-semibold">Enter the requested details</span>
            </li>
            <li className="mb-2 d-flex align-items-center border-bottom">
              <span
                className="d-inline-flex justify-content-center align-items-center border rounded-circle my-3 fw-semibold"
                style={{ width: "50px", height: "50px" }}
              >
                02
              </span>
              <span className="ms-3 steps fw-semibold">Complete e-sign & verification</span>
            </li>
            <li className="d-flex align-items-center">
              <span
                className="d-inline-flex justify-content-center align-items-center border rounded-circle my-3 fw-semibold"
                style={{ width: "50px", height: "50px" }}
              >
                03
              </span>
              <span className="ms-3 steps fw-semibold">Start investing!</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
