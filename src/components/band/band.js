import React from 'react';
import PropTypes from 'prop-types';
import './band.css';

function Band(props) {
  return (
    <div>
      <p>{props.name}</p>
      <img src={props.photo}></img>
      <p>{props.info}</p>
      <br/>
    </div>
  );
}

Band.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default Band;
