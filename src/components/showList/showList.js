import React from 'react';
import PropTypes from 'prop-types';
import Show from '../show/show';
import './showList.css'

function ShowList(props){
  return (
    <div>
      <h1>Shows</h1>
      <div>
        {props.showList.map((show) =>
          <Show
            flyer={show.flyer}
            genre={show.genre}
            headlinerName={show.headlinerName}
            supportName={show.supportName}
            venueName={show.venueName}
            date={show.date}
            time={show.time}
            price={show.price}
            ageLimit={show.ageLimit}
            hypeScore={show.hypeScore}
            key={show.uid}
          />
        )}
      </div>
    </div>
  );
}

ShowList.propTypes = {
  showList: PropTypes.array
};

export default ShowList;
