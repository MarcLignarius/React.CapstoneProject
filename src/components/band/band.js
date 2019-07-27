import React from 'react';
import PropTypes from 'prop-types';
import './band.css';

function Band(props) {
  return (
    <div>
      <p>{props.headlinerName}</p>
      <img src={props.headlinerPhoto}></img>
      <p>{props.headlinerInfo}</p>
      <p>{props.supportName}</p>
      <img src={props.supportPhoto}></img>
      <p>{props.supportInfo}</p>
      <br/>
    </div>
  );
}

Band.propTypes = {
  headlinerName: PropTypes.string.isRequired,
  headlinerPhoto: PropTypes.string.isRequired,
  headlinerInfo: PropTypes.string.isRequired,
  supportName: PropTypes.string.isRequired,
  supportPhoto: PropTypes.string.isRequired,
  supportInfo: PropTypes.string.isRequired
};

export default Band;
