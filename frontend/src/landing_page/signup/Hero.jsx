import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";

export default function Hero() {
  const [phone, setPhone] = useState("");
  return (
    <div className="container mb-5">
      <div className="row text-center mt-5 p-3">
        <h1 className="fs-2">Open a free demat and trading account online</h1>
        <h4 className="text-muted mt-3 fs-5 mb-5">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </h4>
      </div>

      <div className="row mt-5">
        <div className="col-6">
          <img src="/images/account_open.svg" alt="" />
        </div>

        <div className="col-6 mt-3">
          <h1 className="fs-2">Signup now</h1>
          <p className="fs-5 text-muted">Or track your existing application</p>

          <div className="phone-container d-flex flex-column gap-3 mt-2">
            <PhoneInput
              country={"in"}
              value={phone}
              onChange={(phone) => setPhone(phone)}
              inputProps={{
                name: "phone",
                required: true,
                autoFocus: true,
              }}
              inputStyle={{
                width: "100%",
                paddingTop: "29px",
                paddingBottom: "25px",
                fontSize: "20px",
              }}
              containerStyle={{ marginBottom: "15px" }}
            />

            <div>
              <button
                className="p-2 btn btn-primary fs-5 mb-3"
                style={{ width: "50%", margin: "0 auto" }}
              >
                Get OTP
              </button>
            </div>
          </div>

          <p className="text-muted">
            By proceeding, you agree to the
            <Link className="text-decoration-none mx-1">
              terms
            </Link>
            &
            <Link className="text-decoration-none mx-1">
              privacy policy
            </Link>
          </p>

          <div className="border-top">
          <p className="text-muted">
            Looking to open NRI account?
            <Link className="text-decoration-none mx-1">
              Click here
            </Link>
          </p>
          </div>

        </div>
      </div>
    </div>
  );
}
