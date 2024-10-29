import { Icon } from '@iconify/react';
import React from 'react';
import myImage from '../About/1.png';
import myImage2 from '../About/01 (1).png';
import myImage3 from '../About/01 (2).png';
import "../header/header.css"

const About = () => {
    return (
        <>




















            <div className='bg-dark'>
                <div className="container pt-5">
                    <div className="row mt-5 align-items-center">
                        <div className="col-12 col-md-6 col-sm-12 mt-3 position-relative">
                            <h1 className="display-1 position-absolute text-white fw-bold" style={{ opacity: 0.1, top: '-90px', left: 0, zIndex: 0, fontSize: '150px' }}>
                                01
                            </h1>
                            <div className="position-relative" style={{ zIndex: 1 }}>
                                <h6 className="text-warning">
                                    <Icon className='fs-3 me-3' icon="vaadin:line-h" />
                                    Get Started
                                </h6>
                                <h1 className="text-white display-4">What level of hiker <br /> are you?</h1>
                                <p className='text-white mt-4 fs-5'>
                                    Determining what level of hiker you are can be an important tool when planning future hikes.
                                    This hiking level guide will help you plan hikes according to different hike ratings set by
                                    various websites like All Trails and Modern Hiker. What type of hiker are you – novice,
                                    moderate, advanced moderate, expert, or expert backpacker?
                                </p>
                                <h6 className="text-warning">
                                    Read More
                                    <Icon className='fs-3 me-3' icon="si:arrow-right-duotone" />
                                </h6>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <img src={myImage} alt="Hiking Guide" className="img-fluid " />
                        </div>
                    </div>


                    <div className="container py-5">
                        <div className="row mt-5 align-items-center">
                            <div className="col-md-6">
                                <img src={myImage2} alt="Hiking Guide" className="img-fluid mb-5 " />
                            </div>


                            <div className="col-12 col-md-6 col-sm-12 mt-3 position-relative">
                                <h1 className="display-1 position-absolute text-white fw-bold" style={{ opacity: 0.1, top: '-90px', left: 0, zIndex: 0, fontSize: '150px' }}>
                                    02
                                </h1>
                                <div className="position-relative" style={{ zIndex: 1 }}>
                                    <h6 className="text-warning">
                                        <Icon className='fs-3 me-3' icon="vaadin:line-h" />
                                        Hiking Essentials
                                    </h6>
                                    <h1 className="text-white display-4">Picking the right<br /> Hiking Gear!</h1>
                                    <p className='text-white mt-4 fs-5'>The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
                                        Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.                            </p>
                                    <h6 className="text-warning">
                                        Read More
                                        <Icon className='fs-3 me-3' icon="si:arrow-right-duotone" />
                                    </h6>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="container py-5">
                        <div className="row mt-5 align-items-center">

                            <div className="col-12 col-md-6 col-sm-12 mt-3 position-relative">
                                <h1 className="display-1 position-absolute text-white fw-bold" style={{ opacity: 0.1, top: '-90px', left: 0, zIndex: 0, fontSize: '150px' }}>
                                    03
                                </h1>
                                <div className="position-relative" style={{ zIndex: 1 }}>
                                    <h6 className="text-warning">
                                        <Icon className='fs-3 me-3' icon="vaadin:line-h" />
                                        where you go is the key
                                    </h6>
                                    <h1 className="text-white display-4">Understand Your<br />Map & Timing</h1>
                                    <p className='text-white mt-4 fs-5' >To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..
                                        read more                                                   </p>
                                    <h6 className="text-warning">
                                        Read More
                                        <Icon className='fs-3 me-3' icon="si:arrow-right-duotone" />
                                    </h6>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <img src={myImage3} alt="Hiking Guide" className="img-fluid " />
                            </div>
                        </div>
                    </div>
                </div>

            </div >










        </>
    );
}

export default About;
