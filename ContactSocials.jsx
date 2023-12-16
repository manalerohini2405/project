import React from "react";
import { Link } from "react-router-dom";
export default function ContactSocials() {
  return (
    <>
      <div className="col-md-6">
        <div className="h-100 p-5 text-bg-dark rounded-3 justify-content-center ">
          <h2 className="fw-bold text-center">Follow us on</h2>
          <br />
          <div className="text-center">
            <Link to="https://www.instagram.com">
              <img src="insta.jfif" alt="" height={40} width={40} />
            </Link>
             Instagram
          </div>
          <br />
          <div className="text-center">
            <Link to="https://www.facebook.com">
              <img src="fb.png" alt="" height={40} width={40} />
            </Link>
             Facebook
          </div>
          <br />
          <div className="text-center">
            <Link to="https://www.twitter.com#">
              <img src="tw.png" alt="" height={40} width={40} />
            </Link>
             Twitter &emsp;
          </div>
          <br />
          <div className="text-center">
            <Link to="https://www.youtube.com">
              <img src="yt.jfif" alt="" height={40} width={40} />{" "}
            </Link>
             Youtube
          </div>
          <br />
        </div>
      </div>
    </>
  );
}
