import React from 'react';
import './ArtMarket.css';
import img1 from "../../assets/artMarket/img1 2.png"
import img2 from "../../assets/artMarket/image 4.png"
import img3 from "../../assets/artMarket/image 2.png"
const ArtMarket = () => {
    return (
        <div className="container art-market-container">
            <div className="row d-flex">
                {/* Sidebar */}
                <div className="col-md-3 sidebar">
                    <h4>All Artwork/ All</h4>
                    <h3>Original Art For Sale</h3>
                    <h5>Category</h5>
                    <select className="form-select">
                        <option>All</option>
                    </select>
                    <h5>ARTISTS</h5>
                    <label className="form-check-label"><input type="checkbox" className="form-check-input" /> Rokeya Sultana</label>
                    <label className="form-check-label"><input type="checkbox" className="form-check-input" /> Mohammad Eunus</label>
                    <label className="form-check-label"><input type="checkbox" className="form-check-input" /> Murtaja Baseer</label>
                    <h5>MEDIUM</h5>
                    <h5>MATERIAL</h5>
                    <h5>SUBJECT</h5>
                    <h5>PRICE</h5>
                    <h5>NFT</h5>
                    <h5>TIME PERIOD</h5>
                    <h5>LIMITED EDITION</h5>
                </div>

                {/* Main Content */}
                <div className="col-md-9 main-content">
                    <div className="row filter-buttons">
                        <div className="butt">
                            <button className="btn btn-primary">Recommended</button>
                            <button className="btn btn-secondary">Image Search</button>
                        </div>
                        {/* Cards */}
                        <div className='row'>
                                <div className='col-md-4'>
                                    <div className="card">
                                        <img src={img1} alt='pic' className="my-image"/>
                                        <h5>Turquoise Magenta S 1</h5>
                                        <p>Paintings,70.1 W x 100.1 H x 3.8 D cm</p>
                                        <table>
                                            <tr>
                                                <td>Peter Nottrott <br/>Germany</td>
                                               <td><b>$1,360</b></td> 
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="card">
                                        <img src={img2} alt='pic' className="my-image"/>
                                        <h5>Turquoise Magenta S 1</h5>
                                        <p>Paintings,70.1 W x 100.1 H x 3.8 D cm</p>
                                        <table>
                                            <tr>
                                                <td>Peter Nottrott <br/>Germany</td>
                                               <td><b>$1,360</b></td> 
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="card">
                                        <img src={img3} alt='pic' className="my-image"/>
                                        <h5>Turquoise Magenta S 1</h5>
                                        <p>Paintings,70.1 W x 100.1 H x 3.8 D cm</p>
                                        <table>
                                            <tr>
                                                <td>Peter Nottrott <br/>Germany</td>
                                               <td><b>$1,360</b></td> 
                                            </tr>
                                        </table>
                                    </div>
                                </div>  
                                <div className='col-md-4'>
                                    <div className="card">
                                        <img src={img1} alt='pic' className="my-image"/>
                                        <h5>Turquoise Magenta S 1</h5>
                                        <p>Paintings,70.1 W x 100.1 H x 3.8 D cm</p>
                                        <table>
                                            <tr>
                                                <td>Peter Nottrott <br/>Germany</td>
                                               <td><b>$1,360</b></td> 
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="card">
                                        <img src={img2} alt='pic' className="my-image"/>
                                        <h5>Turquoise Magenta S 1</h5>
                                        <p>Paintings,70.1 W x 100.1 H x 3.8 D cm</p>
                                        <table>
                                            <tr>
                                                <td>Peter Nottrott <br/>Germany</td>
                                               <td><b>$1,360</b></td> 
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="card">
                                        <img src={img3} alt='pic' className="my-image"/>
                                        <h5>Turquoise Magenta S 1</h5>
                                        <p>Paintings,70.1 W x 100.1 H x 3.8 D cm</p>
                                        <table>
                                            <tr>
                                                <td>Peter Nottrott <br/>Germany</td>
                                               <td><b>$1,360</b></td> 
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="card">
                                        <img src={img1} alt='pic' className="my-image"/>
                                        <h5>Turquoise Magenta S 1</h5>
                                        <p>Paintings,70.1 W x 100.1 H x 3.8 D cm</p>
                                        <table>
                                            <tr>
                                                <td>Peter Nottrott <br/>Germany</td>
                                               <td><b>$1,360</b></td> 
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="card">
                                        <img src={img2} alt='pic' className="my-image"/>
                                        <h5>Turquoise Magenta S 1</h5>
                                        <p>Paintings,70.1 W x 100.1 H x 3.8 D cm</p>
                                        <table>
                                            <tr>
                                                <td>Peter Nottrott <br/>Germany</td>
                                               <td><b>$1,360</b></td> 
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className="card">
                                        <img src={img3} alt='pic' className="my-image"/>
                                        <h5>Turquoise Magenta S 1</h5>
                                        <p>Paintings,70.1 W x 100.1 H x 3.8 D cm</p>
                                        <table>
                                            <tr>
                                                <td>Peter Nottrott <br/>Germany</td>
                                               <td><b>$1,360</b></td> 
                                            </tr>
                                        </table>
                                    </div>
                                </div>      
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtMarket;
