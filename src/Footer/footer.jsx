
import React from 'react'
import "../header/header.css"
const Footer = () => {
    return (

        <>
            <footer className="bg-dark text-light py-5">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            <h1 className="text-uppercase fs-3">MNTN</h1>
                            <p className='fs-4'>Get out there & discover your next <br /> slope, mountain & destination!</p>
                            <p className='mt-3 pt-5 text-secondary'>© 2023 MNTN, Inc. Terms & Privacy</p>
                        </div>


                        <div className="col-md-3 text-center text-md-start mb-3 mb-md-0">
                            <h6 className="text-uppercase text-warning">More on The Blog</h6>
                            <ul className="list-unstyled">
                                <li className='mt-2'><a href="" className="text-white  text-decoration-none">About MNTN</a></li>
                                <li className='mt-2'><a href="" className="text-white  text-decoration-none">Contributors & Writers</a></li>
                                <li className='mt-2'><a href="" className="text-white  text-decoration-none">Write For Us</a></li>
                                <li className='mt-2'><a href="" className="text-white  text-decoration-none">Contact Us</a></li>
                                <li className='mt-2'><a href="" className="text-white  text-decoration-none">Privacy Policy</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 text-center text-md-start">
                            <h6 className="text-uppercase text-warning">More on MNTN</h6>
                            <ul className="list-unstyled">
                                <li className='mt-2'><a href="" className="text-white  text-decoration-none">The Team</a></li>
                                <li className='mt-2'><a href="" className="text-white  text-decoration-none">Jobs</a></li>
                                <li className='mt-2'><a href="" className="text-white  text-decoration-none">Press</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )
}

export default Footer;