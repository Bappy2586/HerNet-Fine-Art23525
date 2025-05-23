import React from 'react';
import "./ArtEvent.css"
import img1 from "../../assets/ArtEvents/G4 1.png"
import img2 from "../../assets/ArtEvents/S3 1.png"
import img3 from "../../assets/ArtEvents/S1 1.png"
import img4 from "../../assets/ArtEvents/L2 1.png"
import img5 from "../../assets/ArtEvents/L1 1.png"
import img6 from "../../assets/ArtEvents/L3 1.png"
import { Container, Row, Col } from "react-bootstrap";

const ArtEvent = () => {
    return (
        <Container>
            <div>
                <h2 class="event-spacing">Events</h2>
                <p className='paragraph-spacing'>Browse a curated selection of events from around the <br /> world, including gallery openings, upcoming auctions, <br /> museum exhibitions, and more.</p>
                <div>
                    {/* Dropdown menu 1 */}
                    <div class="dropdown me-3">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown button
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    {/* Dropdown menu 2 */}
                    <div class="dropdown me-3">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown button
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    {/* Dropdown menu 3 */}
                    <div class="dropdown me-3">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown button
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>

                    </div>
                    {/* Art Exhibitions */}
                    <h3 className='art-exhib-spacing'>Art Exhibitions</h3>
                    <div>
                        <div className='row' style={{ paddingTop: "10px" }}>
                            <div className='col-md-4'>
                                <img
                                    src={img1}
                                    alt="Artist"
                                    className="rounded custom-image"
                                />
                                <div>
                                    <p>Omer Tiroche Gallery</p>
                                    <p>Egon Schiele: Portraits on Paper</p>
                                    <p>London</p>
                                </div>
                            </div>

                            <div className='col-md-4'>
                                <img
                                    src={img2}
                                    alt="Artist"
                                    className="rounded custom-image"
                                />
                                <div>
                                    <p>Omer Tiroche Gallery</p>
                                    <p>Egon Schiele: Portraits on Paper</p>
                                    <p>London</p>
                                </div>
                            </div>

                            <div className='col-md-4'>
                                <img
                                    src={img3}
                                    alt="Artist"
                                    className="rounded custom-image"
                                />
                                <div>
                                    <p>Omer Tiroche Gallery</p>
                                    <p>Egon Schiele: Portraits on Paper</p>
                                    <p>London</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Horizontal line1 */}
                    <div className="horizontal-line"></div>

                    {/* Art camps */}
                    <h3>Art camps</h3>
                    <div>
                        <div className='row' style={{ paddingTop: "10px" }}>
                            <div className='col-md-4'>
                                <img
                                    src={img4}
                                    alt="Artist"
                                    className="rounded custom-image"
                                />
                                <div>
                                    <p>Omer Tiroche Gallery</p>
                                    <p>Egon Schiele: Portraits on Paper</p>
                                    <p>London</p>
                                </div>
                            </div>

                            <div className='col-md-4'>
                                <img
                                    src={img5}
                                    alt="Artist"
                                    className="rounded custom-image"
                                />
                                <div>
                                    <p>Omer Tiroche Gallery</p>
                                    <p>Egon Schiele: Portraits on Paper</p>
                                    <p>London</p>
                                </div>
                            </div>

                            <div className='col-md-4'>
                                <img
                                    src={img6}
                                    alt="Artist"
                                    className="rounded custom-image"
                                />
                                <div>
                                    <p>Omer Tiroche Gallery</p>
                                    <p>Egon Schiele: Portraits on Paper</p>
                                    <p>London</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Horizontal line */}
                    <div className="horizontal-line2"></div>
                </div>
            </div>
        </Container>
    );
};

export default ArtEvent;