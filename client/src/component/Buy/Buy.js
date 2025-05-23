import React from "react";
import "./Buy.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import BushImage from "../Assets/bush.jpg";
const Buy = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="jumbotron"><h2>Buy your desire printing</h2></div>
        <div className="col-md-5">
          <img
            src={BushImage}
            alt="Sidebar Image"
            style={{ width: "100%", height: "700px", padding: "2px" }}
          />
        </div>
        <div className="col-md-7">
        <Card>
          <p style={{ fontSize: "10px" }}>LOT 001</p>
          <Card.Body>
            <h3 style={{ marginBottom: "2px", color: "red" }}>Ysabel Lemay</h3>
            <p
              style={{ marginTop: "0", marginBottom: "0", paddingLeft: "5px" }}
            >
              United State
            </p>
            <Card.Text>
              UNITY / Artist Proof 1/3 Photograph - Limited Edition of 3
            </Card.Text>
            <Card.Text>
              Photography, Digital on Paper Size: 101.6 W x 203.2 H x 0.3 D cm
            </Card.Text>
            <div
              style={{
                backgroundColor: " #353935",
                height: "110px",
                maxWidth: "370px",
              }}
            >
              <Button
                variant="primary"
                style={{
                  backgroundColor: "red",
                  borderColor: "red",
                  marginLeft: "270px",
                  marginTop: "10px", 
                  padding: "5px",
                }}
              >
                Add to Cart
              </Button>
              <p
                style={{ color: "white", marginLeft: "5px", marginTop: "30px" }}
              >
                $11,350
              </p>
            </div>
            <p>Shipping, taxes, and additional fees may apply. </p>
            <tr>
              <td>
                <span style={{ fontSize: "20px", marginRight: "5px" }}>❤️</span>{" "}
                134
              </td>
              <td style={{ paddingLeft: "200px" }}>376 views</td>
            </tr>
            <p
              style={{
                fontSize: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FaStar style={{ marginRight: "5px" }} />{" "}
              <FaStar style={{ marginRight: "5px" }} />{" "}
              <FaStar style={{ marginRight: "5px" }} />
              <FaStar style={{ marginRight: "5px" }} />{" "}
              <FaStar style={{ marginRight: "5px" }} />
              Write a review
            </p>
            <div
              style={{
                backgroundColor: "#FFFFFF",
                height: "40px",
                width: "310px",
                margin: "5px",
                display: "flex",
                alignItems: "center",
                padding: "0 10px",
              }}
            >
              <FaSignInAlt style={{ fontSize: "20px", marginRight: "5px" }} />{" "}
              <p style={{ fontSize: "15px", margin: 0, textAlign: "center" }}>
                {" "}
                &nbsp; See More Like This
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#FFFFFF",
                height: "140px",
                width: "310px",
                margin: "5px",
                marginTop: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "10px",
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  margin: "2px 0",
                  marginBottom: "8px",
                }}
              >
                Artist Recognition
              </p>

              <div style={{ display: "flex", alignItems: "center" }}>
                <FaArrowRight
                  style={{ fontSize: "13px", marginRight: "10px" }}
                />
                <p style={{ fontSize: "15px", margin: "2px 0" }}>
                  Artist Recognition
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaArrowRight
                  style={{ fontSize: "13px", marginRight: "10px" }}
                />
                <p style={{ fontSize: "15px", margin: "2px 0" }}>
                  Featured in the Catalog
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaArrowRight
                  style={{ fontSize: "13px", marginRight: "10px" }}
                />
                <p style={{ fontSize: "15px", margin: "2px 0" }}>
                  Featured in Inside The Studio
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaArrowRight
                  style={{ fontSize: "13px", marginRight: "10px" }}
                />
                <p style={{ fontSize: "15px", margin: "2px 0" }}>
                  Showed at The Other Art Fair
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaArrowRight
                  style={{ fontSize: "13px", marginRight: "10px" }}
                />
                <p style={{ fontSize: "15px", margin: "2px 0" }}>
                  Artist featured in a collection
                </p>
              </div>
            </div>
          </Card.Body>
        </Card>
        </div>
      </div>
      
    </div>
  );
};

export default Buy;
