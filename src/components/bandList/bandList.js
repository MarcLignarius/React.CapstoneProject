import React from 'react';
import PropTypes from 'prop-types';
import Band from '../band/band';
import './bandList.css'

function BandList(props){
  return (
    <div>
      <h1>Bands</h1>
      <div>
        {props.bandList.map((show) =>
          <Band
            headlinerName={show.headlinerName}
            headlinerPhoto={show.headlinerPhoto}
            headlinerInfo={show.headlinerInfo}
            supportName={show.supportName}
            supportPhoto={show.supportPhoto}
            supportInfo={show.supportInfo}
            key={show.id}
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
