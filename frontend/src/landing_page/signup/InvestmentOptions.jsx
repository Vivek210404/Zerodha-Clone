import React from "react";

export default function InvestmentOptions() {
  return (
    <div className="container mt-5">
      <h1 className="fs-3 text-center">
        Investment options with Zerodha demat account
      </h1>

      <div className="row p-5">
        <div className="col-6 d-flex p-3 gap-4">
          <img src="/images/stocks-acop.svg" alt="" />
          <div>
            <h4>Stocks</h4>
            <p className="text-muted">
              Invest in all exchange-listed securities
            </p>
          </div>
        </div>

        <div className="col-6 d-flex p-3 gap-4">
          <img src="/images/mf-acop.svg" alt="" />
          <div>
            <h4>Mutual funds</h4>
            <p className="text-muted">
              Invest in commission-free direct mutual funds
            </p>
          </div>
        </div>

        <div className="col-6 d-flex p-3 gap-4">
          <img src="/images/ipo-acop.svg" alt="" />
          <div>
            <h4>IPO</h4>
            <p className="text-muted">
              Apply to the latest IPOs instantly via UPI
            </p>
          </div>
        </div>

        <div className="col-6 d-flex p-3 gap-4">
          <img src="/images/fo-acop.svg" alt="" />
          <div>
            <h4>Futures & options</h4>
            <p className="text-muted">
              Hedge and mitigate market risk through simplified F&O trading
            </p>
          </div>
        </div>
      </div>
      <button
        className="p-2 btn btn-primary fs-5 mb-5 d-block mx-auto"
        style={{ width:"25%"}}
      >
        Explore Investments
      </button>
    </div>
  );
}
