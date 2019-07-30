import React from 'react';
import PropTypes from 'prop-types';
import './venue.css';

function Venue(props) {
  return (
    <div>
      <p>{props.name}</p>
      <img src={props.photo}></img>
      <p>{props.address}</p>
      <p>{props.info}</p>
      <p>{props.phone}</p>
      <p>{props.email}</p>
      <p>{props.website}</p>
      <br/>
    </div>
  );
}

Venue.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
};

export default Venue;
