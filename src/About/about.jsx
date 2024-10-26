import { Icon } from '@iconify/react';
import React from 'react';
import myImage from '../About/1.png'; 
import myImage2 from '../About/01 (1).png';  
import myImage3 from '../About/01 (2).png';  

const About = () => {
    return (
        <>
           <div className='bg-dark'>
                <div className="container py-5">
                    <div className="row mt-5 align-items-center">
                        <div className="col-md-6 mb-5 text-white"> 
                            <h5 className='text-warning'>
                                <Icon className='me-2 fs-3' icon="pepicons-pencil:line-x" />
                                Get Started
                            </h5>
                            <h2 className="mt-4 display-4">What level of hiker <br /> are you?</h2>
                            <p className="mt-4 pt-3">
                                Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?
                            </p>
                            <h6 className="text-start text-warning fs-5 mt-2">
                                Read more <Icon className='fs-3 me-2' icon="solar:arrow-right-linear" />
                            </h6>
                        </div>
                        <div className="col-md-6">
                            <img  src={myImage} alt="Hiking Guide" className="img-fluid " /> 
                        </div>
                    </div>
                </div>

                <div className="container py-5">
                    <div className="row mt-5 align-items-center">
                    <div className="col-md-6">
                            <img  src={myImage2} alt="Hiking Guide" className="img-fluid " /> 
                        </div>
                        <div className="col-md-6 mb-5 text-white"> 
                            <h5 className='text-warning'>
                                <Icon className='me-2 fs-3' icon="pepicons-pencil:line-x" />
                                Get Started
                            </h5>
                            <h2 className="mt-4 display-4">What level of hiker <br /> are you?</h2>
                            <p className="mt-4 pt-3">
                                Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?
                            </p>
                            <h6 className="text-start text-warning fs-5 mt-2">
                                Read more <Icon className='fs-3 me-2' icon="solar:arrow-right-linear" />
                            </h6>
                        </div>
                       
                    </div>
                </div>

                <div className="container py-5">
                    <div className="row mt-5 align-items-center">
                        <div className="col-md-6 mb-5 text-white"> 
                            <h5 className='text-warning'>
                                <Icon className='me-2 fs-3' icon="pepicons-pencil:line-x" />
                                Get Started
                            </h5>
                            <h2 className="mt-4 display-4">What level of hiker <br /> are you?</h2>
                            <p className="mt-4 pt-3">
                                Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?
                            </p>
                            <h6 className="text-start text-warning fs-5 mt-2">
                                Read more <Icon className='fs-3 me-2' icon="solar:arrow-right-linear" />
                            </h6>
                        </div>
                        <div className="col-md-6">
                            <img  src={myImage3} alt="Hiking Guide" className="img-fluid " /> 
                        </div>
                    </div>
                </div>
            
            </div>








        </>
    );
}

export default About;
