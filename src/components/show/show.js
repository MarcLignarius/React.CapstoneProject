import React from 'react';
import PropTypes from 'prop-types';
import './show.css';

function Show(props) {
  return (
    <div>
      <img src={props.flyer}></img>
      <p>{props.genre}</p>
      <p>{props.headlinerName}</p>
      <p>{props.supportName}</p>
      <p>{props.venueName}</p>
      <p>{props.date}</p>
      <p>{props.time}</p>
      <p>{props.price}</p>
      <p>{props.ageLimit}</p>
      <p>{props.hypeScore}</p>
      <br/>
    </div>
  );
}

Show.propTypes = {
  flyer: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  headlinerName: PropTypes.string.isRequired,
  supportName: PropTypes.string.isRequired,
  venueName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  ageLimit: PropTypes.string.isRequired,
  hypeScore: PropTypes.number.isRequired
};

export default Show;
