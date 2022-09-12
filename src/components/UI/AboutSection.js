import React from 'react';

import {Container, Row, Col} from "reactstrap";
import '../../styles/about-section.css'
import aboutImg from  '../../assets/all-images/cars-img/car-1.png'

const AboutSection = () => {
    return (
        <div>
            <section>
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className="about__section-content">
                                <h4 className="section__subtitle">
                                    About Us
                                </h4>
                                <h2 className="section__title">Welcome to car rent service</h2>
                                <p className="section__description">Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Accusamus deleniti dolores eligendi, enim facilis fuga harum ipsum iste itaque
                                    laboriosam molestiae mollitia natus neque quo recusandae rem sapiente soluta,
                                    ut?
                                </p>

                                <div className="about__section-item d-flex align-items-center">
                                    <p className="section__description d-flex align-items-center gap-2">
                                        <i className="ri-checkbox-line"></i>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    </p>
                                    
                                    <p className="section__description d-flex align-items-center gap-2">
                                        <i className="ri-checkbox-line"></i>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    </p>
                                </div>

                                <div className="about__section-item d-flex align-items-center">
                                    <p className="section__description d-flex align-items-center gap-2">
                                        <i className="ri-checkbox-line"></i>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    </p>

                                    <p className="section__description d-flex align-items-center gap-2">
                                        <i className="ri-checkbox-line"></i>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col lg='6' md='6'>
                        <div className="about__img">
                            <img src={aboutImg} alt="" className="w-100"/>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export {AboutSection};
