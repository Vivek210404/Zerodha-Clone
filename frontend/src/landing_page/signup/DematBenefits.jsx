import React from "react";

export default function DematBenefits() {
  return (
    <div className="contaoner mt-5">
      <div className="row align-items-center">
        <div className="col-6 text-center">
          <img
            src="/images/acop-benefits.svg"
            alt=""
            className="img-fluid p-4 me-5"
            style={{ maxWidth: "90%", width: "60%" }}
          />
          <h2 className="fs-4 mb-5 pb-5">Benefits of opening a Zerodha demat account</h2>
        </div>

        <div className="col-6">
            <div className="mb-5 text-muted">
                <h4 className="fw-semibold mb-4">Unbeatable pricing</h4>
                <p>Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday <br /> and F&O trades.</p>
            </div>
            <div className="mb-5 text-muted">
                <h4 className="fw-semibold mb-4">Best investing experience</h4>
                <p>Simple and intuitive trading platform with an easy-to-understand user interface.</p>
            </div>
            <div className="mb-5 text-muted">
                <h4 className="fw-semibold mb-4">No spam or gimmicks</h4>
                <p>Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.</p>
            </div>
            <div className="mb-5 text-muted">
                <h4 className="fw-semibold mb-4">The Zerodha universe</h4>
                <p>More than just an app — gain free access to the entire ecosystem of our partner products.</p>
            </div>
        </div>
      </div>
    </div>
  );
}
