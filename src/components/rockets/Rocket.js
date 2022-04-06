/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch } from 'react-redux';
import { RemoveReservation, AddReservation } from '../../redux/rockets/rocketsActions';
import responsiveCarousel from '../../utils/carousel';

function Rocket({ rocket, reserved }) {
  const dispatch = useDispatch();
  return (
    <div className="card bg-light mt-4">
      <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-4">
          <Carousel
            responsive={responsiveCarousel}
            showDots
            infinite
          >
            {
    rocket.flickr_images.map((img) => (<img src={img} key={img} alt="" className="img-fluid" />))
          }
          </Carousel>
        </div>
        <div className="col-sm-12 col-md-8 col-lg-8 d-flex flex-column justify-content-center">
          <h2 className="fs-5">{rocket.rocket_name}</h2>
          <p>
            {
            reserved
              ? (
                <h className="bg-info text-white">
                  Reserved
                  &nbsp;&nbsp;
                  &nbsp;&nbsp;
                </h>
              ) : ''
           }
            { rocket.description}
          </p>
          {
            reserved
              ? (
                <Button
                  style={{ width: 'calc(25% + 80px)' }}
                  onClick={() => dispatch(RemoveReservation(rocket.id))}
                  variant="outline-secondary"
                >
                  Cancel Reservation
                </Button>
              )
              : (
                <Button
                  onClick={() => dispatch(AddReservation(rocket.id))}
                  style={{ width: 'calc(25% + 80px)' }}
                  variant="primary"
                >
                  Reserve Rocket
                </Button>
              )

          }
        </div>
      </div>
    </div>
  );
}

export default Rocket;
