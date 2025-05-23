import React from "react";
import "./ArtistProfile.css";
import Eye4 from "../../assets/eye4.jpg";
import Image1 from "../../assets/ArtistProfile/image 1.png"
import Image2 from "../../assets/ArtistProfile/image 2.png"
import Image3 from "../../assets/ArtistProfile/image 3.png"
import Image4 from "../../assets/ArtistProfile/image 4.png"
import Image5 from "../../assets/ArtistProfile/image 5.png"
import bookImg1 from "../../assets/ArtistProfile/bookImg 1.png"
import { Container, Row, Col } from "react-bootstrap";

const ArtistProfile = () => {
    // ✅ Define the videos array inside the component
    const videos = [
        { id: "n3XTZde8ZvQ", title: "Watch on YouTube 1" },
        { id: "J6Ga4wciA2k", title: "Watch on YouTube 2" } // Replace with actual video ID
    ];

    return (
        <Container>
            <div className="spacing">
                <Row>
                    {/* Text Column */}
                    <Col md={8} className="texts fixed-text-column">
                        <h3>Artist Bio</h3>
                        <h5>Prof. Mohammad Eunus</h5>
                        <p>Born in Thakurgaon, Bangladesh in 1954;</p>
                        <p>
                            Education: B.F.A. Fine Arts Faculty, University of Dhaka,
                            Bangladesh in 1979; M.F.A. Tama Art University, Tokyo, Japan in
                            1987; AIEJ Research Fellowship, Tama Art University, Tokyo Japan in
                            1997.
                        </p>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but
                            the majority have suffered alteration in some form, by injected
                            humour, or randomised words which don't look even slightly
                            believable...
                        </p>
                    </Col>

                    {/* Image Column */}
                    <Col style={{textAlign:"right"}}>
                        <img
                            src={Image1}
                            alt="Artist"
                            className="img-fluid rounded custom-pro-image align-right"
                        />
                    </Col>

                </Row>

            </div>

            {/* ✅ YouTube Video Thumbnails */}
            <div className="mt-4 text-center">
                <h5>Watch More About The Artist</h5>
                <Row className="justify-content-center">
                    {videos.map((video, index) => (
                        <Col key={index} md={4} sm={6} xs={12} className="mb-3">
                            <a
                                href={`https://www.youtube.com/watch?v=${video.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                                    alt={video.title}
                                    className="img-fluid rounded shadow"
                                    style={{ maxWidth: "100%", cursor: "pointer" }}
                                />
                            </a>
                        </Col>
                    ))}
                </Row>
            </div>

            {/* Horizontal line */}
            <div className="horizontal-line"></div>

            {/* Artworks section */}
            <div>
                <h3 className="texts">Artworks</h3>
                <Row className="d-flex justify-content-around">
                    {/* Left Image */}
                    <Col md={4} className="text-start">
                        <img
                            src={Eye4}
                            alt="Artist"
                            className="img-fluid rounded"
                        />
                    </Col>

                    {/* Right Image */}
                    <Col md={4} className="text-end">
                        <img
                            src={Eye4}
                            alt="Artist"
                            className="img-fluid rounded"
                        />
                    </Col>
                </Row>
            </div>


            {/* Horizontal line */}
            <div className="horizontal-line"></div>

            {/* Available Art for purchase section */}
            <div>
                <div>
                    <h3 className="texts">Available Art for purchase</h3>
                    <p><a class="link-opacity-25-hover" href="#">Explore</a></p>
                </div>
                <Row>
                    {/* Image Column */}
                    <Col md={4} className="text-end">
                        <img
                            src={Image2}
                            alt="Artist"
                            className="img-fluid rounded custom-image-available"
                        />
                    </Col>

                    {/* Image Column */}
                    <Col md={4} className="text-end">
                        <img
                            src={Image3}
                            alt="Artist"
                            className="img-fluid rounded custom-image-available"
                        />
                    </Col>

                    {/* Image Column */}
                    <Col md={4} className="text-end">
                        <img
                            src={Image4}
                            alt="Artist"
                            className="img-fluid rounded custom-image"
                        />
                    </Col>
                </Row>
            </div>

            {/* Horizontal line */}
            <div className="horizontal-line"></div>

            {/* Past Art works */}
            <div>
                <Row>
                    <Col md={8} className="texts fixed-text-column">
                        <h3>Past Art works</h3>
                        <h5 className="desccrption-spacing">Description</h5>
                        <p className="paragraph-spacing">
                            Story of a Wall" captures the journey of  a wall from its initial pristine state to its eventual decay due to neglect. Through layers of color and texture, the artist reveals  beauty in the imperfections, with blue  symbolizing peace in the wall's restoration
                        </p>
                    </Col>

                    {/* Image Column */}

                    <Col className="text-end">
                        <p><a class="link-opacity-25-hover" href="#">Explore</a></p>
                        <img
                            src={Image5}
                            alt="Artist"
                            className="img-fluid rounded custom-image-past"
                        />
                    </Col>
                </Row>
            </div>

            {/* Horizontal line */}
            <div className="horizontal-line"></div>

            {/* Book */}
            <div>
                <Row>
                    <Col className="texts fixed-text-column">
                        <h3>Book</h3>
                        <h5 className="desccrption-spacing">Description</h5>
                        <p className="paragraph-spacing">
                            Story of a Wall" captures the journey of  a wall from its initial pristine state to its eventual decay due to neglect. Through layers of color and texture, the artist reveals  beauty in the imperfections, with blue  symbolizing peace in the wall's restoration
                        </p>
                    </Col>

                    {/* Image Column */}

                    <Col className="text-end">
                        <p><a class="link-opacity-25-hover" href="#">Explore</a></p>
                        <img
                            src={bookImg1}
                            alt="Artist"
                            className="img-fluid rounded custom-image-book"
                        />
                    </Col>
                </Row>
            </div>
            <div className="comment">
                <h3 className="texts">Any Comment</h3>
                <form className="desccrption-spacing">
                    <textarea
                        className="form-control"
                        rows="8"
                        placeholder="Write comment here...">
                    </textarea>
                </form>
            </div>
        </Container>
    );
};

export default ArtistProfile;
