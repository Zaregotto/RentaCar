import React from 'react';
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

const CarItem = (props) => {

    const {id, imgUrl, model, carName, automatic, speed, price} = props.item

    return (
        <Col lg='4' md='4' sm='6' className='mb-5'>
            <div className="car__item">
                <div className="car__img">
                    <img src={imgUrl} alt=""/>
                </div>
            </div>
        </Col>
    );
};

export {CarItem};
