import { Fragment } from "react";
import "./section.css";
import { Link } from "react-router-dom";

export default function Section() {
  return (
    <Fragment>
        <br /><br />
      <div className="parentSection">
        <div className="parentTitles" >
          <h1>NanoServeHub: Elevate Your Restaurant Management Experience</h1>
          <p>
            Discover NanoServeHub: Your recipe for efficient restaurant
            management. From orders to inventory, we've got you covered.
            Simplify. Succeed. NanoServeHub.
          </p>
          <div className="parentLinks">
          <Link to="/" className="btnFreeTrialLink">
            Start Your Free Trial
          </Link>
          <Link to="/" className="btnDemo">
            Request a Demo
          </Link>
          </div>
        </div>
        <div className="parentImages">
          <div className="mockup-browser border border-base-300 parentMockUp1">
            <div className="mockup-browser-toolbar">
              <div className="input border border-base-300 textInput">
                https://nano-serve-hub.com
              </div>
            </div>
            <div className="flex justify-center px-1 py-1 border-t border-base-300">
              <img src="/public/Images/img1.jpg" alt="" className="image1" />
            </div>
          </div>
          <div className="mockup-browser border bg-base-300 parentMockUp2">
            <div className="mockup-browser-toolbar">
                <div className="input textInput">https://nano-serve-hub/dashboard</div>
            </div>
            <div className="flex justify-center px-1 py-1 bg-base-200">
              <img src="/public/Images/img2.jpg" alt="" className="image2" />
            </div>
            </div>
        </div>
      </div>
    </Fragment>
  );
}
