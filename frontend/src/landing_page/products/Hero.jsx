import React from "react";

function Hero() {
  return (
    <div className="container border-bottom">
      <div className="row text-center mt-5 p-3">
        <h1 className="fs-2">Zerodha Products</h1>
        <h3 className="text-muted mt-2 fs-4">Sleek, modern, and intuitive trading platforms</h3>
        <p className="mt-2 mb-5">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings <i class="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
