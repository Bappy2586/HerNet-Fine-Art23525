import React from "react";
import "./Galleries.css";
import Slider from "./../../Slider";
import cartoonImage from "../Assets/cartoon.png";

const Galleries = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2>Gallery & Foundation</h2>
            <hr />
          </div>
          <div className="col-md-5">
            <aside className="flex-item sidebar1">
              <h2>Theme Art</h2>
              <p className="spaced">By Paul</p>
              <p className="spaced">Current show</p>
              <p>Gulshan Avenue </p>
              <p>Alisha Prodhan Tower</p>
            </aside>
            <br/>
          </div>
          <div className="col-md-7">
            <Slider />
            <br/>
          </div>
          <div className="col-md-6">
              <input
                className="form-control "
                type="search"
                placeholder="Search... "
                aria-label="search"
              />
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                type="search"
                placeholder="Search... "
                aria-label="search"
              />
            </div>
        </div>
        <div className="row">
          <div className="jumbotron-gl">
            <h2>Gallery</h2>
            <hr />
          </div>
          <div className="col-md-4">
            <aside className="flex-item sidebargl">
              <p>Edge Gallary</p>
              <img src={cartoonImage} alt="Cartoon" />
            </aside>
          </div>
          <div className="col-md-4">
            <aside className="flex-item sidebargl">
              <p>Edge Gallary</p>
              <img src={cartoonImage} alt="Cartoon" />
            </aside>
          </div>
          <div className="col-md-4">
            <aside className="flex-item sidebargl">
              <p>Edge Gallary</p>
              <img src={cartoonImage} alt="Cartoon" />
            </aside>
          </div>
        </div>
        <div className="row">
          <div className="jumbotron-fn">
            <h2>Foundation</h2>
            <hr />
          </div>
          <div className="col-md-4">
            <aside className="flex-item sidebarfn">
              <p>Edge Gallary</p>
              <img src={cartoonImage} alt="Cartoon" />
            </aside>
          </div>
          <div className="col-md-4">
            <aside className="flex-item sidebarfn">
              <p>Edge Gallary</p>
              <img src={cartoonImage} alt="Cartoon" />
            </aside>
          </div>
          <div className="col-md-4">
            <aside className="flex-item sidebarfn">
              <p>Edge Gallary</p>
              <img src={cartoonImage} alt="Cartoon" />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default Galleries;
