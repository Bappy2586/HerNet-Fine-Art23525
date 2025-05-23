import React from "react";
import { DivWrapper } from "./DivWrapper";
import { Frame } from "./Frame";
import { FrameWrapper } from "./FrameWrapper";
import { Group } from "./Group";
import hfaWhiteHernetLogoCopy21 from "./hfa-white-hernet-logo-copy-2-1.png";
import iconCart from "./icon-cart.png";
import iconChevronRight from "./icon-chevron-right.png";
import line1 from "./line-1.svg";
import line2 from "./line-2.svg";
import line3 from "./line-3.svg";
import line4 from "./line-4.svg";
import slider1 from "./slider-1.png";
import slider2 from "./slider-2.png";
import slider3 from "./slider-3.png";
import "./style.css";
import vector from "./vector.svg";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div-2">
        <div className="overlap-6">
          <div className="rectangle-4" />

          <div className="text-wrapper-24">Artists</div>

          <div className="text-wrapper-25">Art Events</div>

          <div className="text-wrapper-25">Art Events</div>

          <div className="text-wrapper-26">Login</div>

          <div className="text-wrapper-27">Art Org</div>

          <div className="text-wrapper-28">About Us</div>

          <div className="text-wrapper-29">Contact Us</div>

          <div className="art-market">Art Market &gt;</div>

          <div className="text-wrapper-30">Art History</div>

          <div className="text-wrapper-31">Editorial</div>

          <div className="text-wrapper-31">Editorial</div>

          <div className="hernet-foundation">HerNet Foundation &gt;</div>

          <div className="rectangle-5" />

          <div className="text-wrapper-32">Search art or artist..</div>

          <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
              <img className="vector" alt="Vector" src={vector} />

              <img
                className="icon-chevron-right"
                alt="Icon chevron right"
                src={iconChevronRight}
              />
            </div>
          </div>

          <img
            className="hfa-white-hernet-2"
            alt="Hfa white hernet"
            src={hfaWhiteHernetLogoCopy21}
          />

          <div className="rectangle-6" />

          <div className="text-wrapper-33">Explore Arts</div>

          <img className="icon-cart" alt="Icon cart" src={iconCart} />
        </div>

        <img className="slider-2" alt="Slider" src={slider1} />

        <img className="slider-3" alt="Slider" src={slider2} />

        <img className="slider-4" alt="Slider" src={slider3} />

        <p className="discover-art-you">
          Discover Art You Love From the World&#39;s Leading Online Gallery
        </p>

        <p className="text-wrapper-34">The Other Art Fair Is Back</p>

        <p className="text-wrapper-35">The Other Art Fair Is Back</p>

        <p className="text-wrapper-36">The Other Art Fair Is Back</p>

        <p className="text-wrapper-37">Find a Fair Near You</p>

        <p className="text-wrapper-38">Find a Fair Near You</p>

        <p className="text-wrapper-39">Find a Fair Near You</p>

        <img className="line-3" alt="Line" src={line1} />

        <img className="line-4" alt="Line" src={line2} />

        <Frame />
        <img className="line-5" alt="Line" src={line3} />

        <img className="line-6" alt="Line" src={line4} />

        <FrameWrapper />
        <div className="ellipse-4" />

        <div className="ellipse-5" />

        <div className="ellipse-6" />

        <DivWrapper />
        <div className="overlap-7">
          <Group />
          <p className="terms-of-service">
            Terms of Service&nbsp;&nbsp;&nbsp;&nbsp;Privacy
            Notice&nbsp;&nbsp;&nbsp;&nbsp; Cookie
            Policy&nbsp;&nbsp;&nbsp;&nbsp;Copyright
            Policy&nbsp;&nbsp;&nbsp;&nbsp;Bangladesh Notice of
            Collection&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Do Not
            Sell or share My Personal Information
          </p>
        </div>
      </div>
    </div>
  );
};
