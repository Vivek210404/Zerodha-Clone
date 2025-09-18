import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-6 p-5">
          <img src={imageURL} alt="" style={{width:"100%"}} />
        </div>
        <div className="col-6 p-5 mt-3">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{marginLeft:"50px"}}>Learn More</a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="/images/googlePlayBadge.svg" alt="" />
            </a>
            <a href={appStore}>
              <img src="/images/appstoreBadge.svg" alt="" style={{marginLeft:"50px"}} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
