import React from 'react';
import PropTypes from 'prop-types';
import './venue.css';

function Venue(props) {
  return (
    <div>
      <p>{props.venueName}</p>
      <img src={props.venuePhoto}></img>
      <p>{props.venueAddress}</p>
      <p>{props.venueDescription}</p>
      <p>{props.venuePhone}</p>
      <p>{props.venueEmail}</p>
      <p>{props.venueWebsite}</p>
      <br/>
    </div>
  );
}

Venue.propTypes = {
  venueName: PropTypes.string.isRequired,
  venuePhoto: PropTypes.string.isRequired,
  venueAddress: PropTypes.string.isRequired,
  venueDescription: PropTypes.string.isRequired,
  venuePhone: PropTypes.string.isRequired,
  venueEmail: PropTypes.string.isRequired,
  venueWebsite: PropTypes.string.isRequired,
};

export default Venue;
