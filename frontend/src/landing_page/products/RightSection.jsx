import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-6 p-5 mt-3">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore}>
              Learn More
            </a>
          </div>
        </div>
        <div className="col-6 p-5">
          <img src={imageURL} alt="" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
