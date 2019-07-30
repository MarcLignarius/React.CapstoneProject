import React from 'react';
import PropTypes from 'prop-types';
import Band from '../band/band';
import './bandList.css'

function BandList(props){
  return (
    <div>
      <h1>Bands</h1>
      <div>
        {props.bandList.map((band) =>
          <Band
            name={band.name}
            photo={band.photo}
            info={band.info}
            key={band.id}
          />
        )}
      </div>
    </div>
  );
}

BandList.propTypes = {
  bandList: PropTypes.array
};

export default BandList;
