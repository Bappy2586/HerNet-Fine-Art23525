import React from "react";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import Eye from "./assets/eyeprint.jpg";
import Eye2 from "./assets/eye2.jpg";
import Eye3 from "./assets/eye3.jpg";
import Eye4 from "./assets/eye4.jpg";
import Eye5 from "./assets/eye5.jpg";
import Artis2 from "./assets/artis2.png";
import Artis from "./assets/artis.jpg";
import Card from "react-bootstrap/Card";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { FaCartPlus } from "react-icons/fa";
import testi1 from "./assets/test.png";
import "./Home.css";
import TestimonialSlider from "./component/Testimoniaslide";
import Demo from "./component/demo";

const Home = () => {
  return (
    <>
      <Slider />
      <div style={{ display: "show" }}>
        <div style={{ marginLeft: "20px", padding: "20px" }}>
          <div className="row" style={{ textAlign: "center" }}>
            <div className="col-md-12">
              <h3>
                Discover Art You Love From the World's Leading Online Gallery
              </h3>
            </div>
            <div className="col-md-4">
              <Card>
                <img className="d-block w-100" src={Eye} alt="Slide 3" />
                <p>This is test data</p>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    padding: "5px",
                    border: "1px solid #ddd",
                  }}
                >
                  Go to Gallery
                </a>
              </Card>
            </div>
            <div className="col-md-4">
              <Card>
                <img className="d-block w-100" src={Eye} alt="Slide 3" />
                <p>This is test data</p>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    padding: "5px",
                    border: "1px solid #ddd",
                  }}
                >
                  Go to Gallery
                </a>
              </Card>
            </div>
            <div className="col-md-4">
              <Card>
                <img className="d-block w-100" src={Eye} alt="Slide 3" />
                <p>This is test data</p>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    padding: "5px",
                    border: "1px solid #ddd",
                  }}
                >
                  Go to Gallery
                </a>
              </Card>
            </div>
          </div>
          {/* end gallery secton */}
          <div className="row">
            <div className="col-md-2">
              <br />
              <br />
              <h3>Shop by Category</h3>
            </div>
            <div className="col-md-10">
              <br />
              <br />
              <Tabs
                defaultActiveKey="oilprint"
                id="fill-tab-example"
                className="mb-3"
                fill
              >
                <Tab eventKey="oilprint" title="Oil Print">
                  <div className="row">
                    <div className="col-md-4">
                      <Card>
                        <img
                          className="d-block w-100"
                          src={Eye2}
                          alt="Slide 3"
                        />
                        <table>
                          <tr>
                            <td>HerNet Gallery</td>
                            <td>$3000</td>
                            <td>
                              {" "}
                              <Link to="/buy" className="fw-semibold">
                                <FaCartPlus
                                  style={{ color: "#a37c07", fontSize: "22" }}
                                />
                              </Link>
                            </td>
                          </tr>
                        </table>
                      </Card>
                    </div>
                    <div className="col-md-4">
                      <Card>
                        <img
                          className="d-block w-100"
                          src={Eye2}
                          alt="Slide 3"
                        />
                        <table>
                          <tr>
                            <td>HerNet Gallery</td>
                            <td>$3000</td>
                            <td>
                              <Link to="/buy" className="fw-semibold">
                                <FaCartPlus
                                  style={{ color: "#a37c07", fontSize: "22" }}
                                />
                              </Link>
                            </td>
                          </tr>
                        </table>
                      </Card>
                    </div>
                    <div className="col-md-4">
                      <Card>
                        <img
                          className="d-block w-100"
                          src={Eye2}
                          alt="Slide 3"
                        />
                        <table>
                          <tr>
                            <td>HerNet Gallery</td>
                            <td>$3000</td>
                            <td>
                              {" "}
                              <Link to="/buy" className="fw-semibold">
                                <FaCartPlus
                                  style={{ color: "#a37c07", fontSize: "22" }}
                                />
                              </Link>
                            </td>
                          </tr>
                        </table>
                      </Card>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="fineArts" title="Fine Arts">
                  <div className="row">
                    <div className="col-md-4">
                      <Card>
                        <img
                          className="d-block w-100"
                          src={Eye3}
                          alt="Slide 3"
                        />
                        <table>
                          <tr>
                            <td>HerNet Gallery</td>
                            <td>$3000</td>
                            <td>
                              {" "}
                              <Link to="/buy" className="fw-semibold">
                                <FaCartPlus
                                  style={{ color: "#a37c07", fontSize: "22" }}
                                />
                              </Link>
                            </td>
                          </tr>
                        </table>
                      </Card>
                    </div>
                    <div className="col-md-4">
                      <Card>
                        <img
                          className="d-block w-100"
                          src={Eye3}
                          alt="Slide 3"
                        />
                        <table>
                          <tr>
                            <td>HerNet Gallery</td>
                            <td>$3000</td>
                            <td>
                              <Link to="/buy" className="fw-semibold">
                                <FaCartPlus
                                  style={{ color: "#a37c07", fontSize: "22" }}
                                />
                              </Link>
                            </td>
                          </tr>
                        </table>
                      </Card>
                    </div>
                    <div className="col-md-4">
                      <Card>
                        <img
                          className="d-block w-100"
                          src={Eye3}
                          alt="Slide 3"
                        />
                        <table>
                          <tr>
                            <td>HerNet Gallery</td>
                            <td>$3000</td>
                            <td>
                              {" "}
                              <Link to="/buy" className="fw-semibold">
                                <FaCartPlus
                                  style={{ color: "#a37c07", fontSize: "22" }}
                                />
                              </Link>
                            </td>
                          </tr>
                        </table>
                      </Card>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="Photography" title="Photography">
                  <div className="row">
                    <div className="col-md-4">
                      <Card>
                        <img
                          className="d-block w-100"
                          src={Eye4}
                          alt="Slide 3"
                        />
                        <table>
                          <tr>
                            <td>HerNet Gallery</td>
                            <td>$3000</td>
                            <td>
                              {" "}
                              <Link to="/buy" className="fw-semibold">
                                <FaCartPlus
                                  style={{ color: "#a37c07", fontSize: "22" }}
                                />
                              </Link>
                            </td>
                          </tr>
                        </table>
                      </Card>
                    </div>
                    <div className="col-md-4">
                      <Card>
                        <img
                          className="d-block w-100"
                          src={Eye4}
                          alt="Slide 3"
                        />
                        <table>
                          <tr>
                            <td>HerNet Gallery</td>
                            <td>$3000</td>
                            <td>
                            <Link to="/buy" className="fw-semibold">
                                <FaCartPlus
                                  style={{ color: "#a37c07", fontSize: "22" }}
                                />
                              </Link>
                            </td>
                          </tr>
                        </table>
                      </Card>
                    </div>
                    <div className="col-md-4">
                      <Card>
                        <img
                          className="d-block w-100"
                          src={Eye4}
                          alt="Slide 3"
                        />
                        <table>
                          <tr>
                            <td>HerNet Gallery</td>
                            <td>$3000</td>
                            <td>
                              {" "}
                              <Link to="/buy" className="fw-semibold">
                                <FaCartPlus
                                  style={{ color: "#a37c07", fontSize: "22" }}
                                />
                              </Link>
                            </td>
                          </tr>
                        </table>
                      </Card>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="Sculpture" title="Sculpture">
                  <div className="row">
                    <div className="col-md-4">
                      <Card>
                        <img
                          className="d-block w-100"
                          src={Eye5}
                          alt="Slide 3"
                        />
                        <table>
                          <tr>
                            <td>HerNet Gallery</td>
                            <td>$3000</td>
                            <td>
                              {" "}
                              <Link to="/buy" className="fw-semibold">
                                <FaCartPlus
                                  style={{ color: "#a37c07", fontSize: "22" }}
                                />
                              </Link>
                            </td>
                          </tr>
                        </table>
                      </Card>
                    </div>
                    <div className="col-md-4">
                      <Card>
                        <img
                          className="d-block w-100"
                          src={Eye5}
                          alt="Slide 3"
                        />
                        <table>
                          <tr>
                            <td>HerNet Gallery</td>
                            <td>$3000</td>
                            <td>
                            <Link to="/buy" className="fw-semibold">
                                <FaCartPlus
                                  style={{ color: "#a37c07", fontSize: "22" }}
                                />
                              </Link>
                            </td>
                          </tr>
                        </table>
                      </Card>
                    </div>
                    <div className="col-md-4">
                      <Card>
                        <img
                          className="d-block w-100"
                          src={Eye5}
                          alt="Slide 3"
                        />
                        <table>
                          <tr>
                            <td>HerNet Gallery</td>
                            <td>$3000</td>
                            <td>
                              {" "}
                              <Link to="/buy" className="fw-semibold">
                                <FaCartPlus
                                  style={{ color: "#a37c07", fontSize: "22" }}
                                />
                              </Link>
                            </td>
                          </tr>
                        </table>
                      </Card>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="FreeArts" title="Free Arts">
                  <div className="row">
                    <div className="col-md-4">
                      <Card>
                        <img
                          className="d-block w-100"
                          src={Eye2}
                          alt="Slide 3"
                        />
                        <table>
                          <tr>
                            <td>HerNet Gallery</td>
                            <td>$3000</td>
                            <td>
                              {" "}
                              <Link to="/buy" className="fw-semibold">
                                <FaCartPlus
                                  style={{ color: "#a37c07", fontSize: "22" }}
                                />
                              </Link>
                            </td>
                          </tr>
                        </table>
                      </Card>
                    </div>
                    <div className="col-md-4">
                      <Card>
                        <img
                          className="d-block w-100"
                          src={Eye2}
                          alt="Slide 3"
                        />
                        <table>
                          <tr>
                            <td>HerNet Gallery</td>
                            <td>$3000</td>
                            <td>
                            <Link to="/buy" className="fw-semibold">
                                <FaCartPlus
                                  style={{ color: "#a37c07", fontSize: "22" }}
                                />
                              </Link>
                            </td>
                          </tr>
                        </table>
                      </Card>
                    </div>
                    <div className="col-md-4">
                      <Card>
                        <img
                          className="d-block w-100"
                          src={Eye2}
                          alt="Slide 3"
                        />
                        <table>
                          <tr>
                            <td>HerNet Gallery</td>
                            <td>$3000</td>
                            <td>
                              {" "}
                              <Link to="/buy" className="fw-semibold">
                                <FaCartPlus
                                  style={{ color: "#a37c07", fontSize: "22" }}
                                />
                              </Link>
                            </td>
                          </tr>
                        </table>
                      </Card>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
          {/* end tab secton */}
          <div className="row" style={{ textAlign: "left" }}>
            <div className="col-md-2">
              <br />
              <br />
              <h3>Best Artis of 2025</h3>
            </div>
            <div className="col-md-3">
              <br />
              <br />
              <Card>
                <img className="d-block w-100" src={Artis2} alt="Artis 3" />
                <table>
                  <tr>
                    <td>HerNet Gallery</td>
                  </tr>
                </table>
              </Card>
            </div>
            <div className="col-md-3">
              <br />
              <br />
              <Card>
                <img className="d-block w-100" src={Artis} alt="Artis 3" />
                <table>
                  <tr>
                    <td>HerNet Gallery</td>
                  </tr>
                </table>
              </Card>
            </div>
            <div className="col-md-3">
              <br />
              <br />
              <Card>
                <img className="d-block w-100" src={Artis} alt="Artis 3" />
                <table>
                  <tr>
                    <td>HerNet Gallery</td>
                  </tr>
                </table>
              </Card>
            </div>
            <div className="col-md-1">
              <a href="#">
                <br />
                <br />
                More...
              </a>
            </div>
          </div>
          {/* end Best Artis */}
          <div className="row" style={{ textAlign: "center" }}>
            <Demo />
            <hr />
          </div>
          {/* end  Explore */}
          <div className="row">
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
