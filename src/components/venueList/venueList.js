import React from 'react';
import PropTypes from 'prop-types';
import Venue from '../venue/venue';
import './venueList.css'

function VenueList(props){
  return (
    <div>
      <h1>Venues</h1>
      <div>
        {props.venueList.map((venue) =>
          <Venue
            name={venue.name}
            photo={venue.photo}
            address={venue.address}
            info={venue.info}
            phone={venue.phone}
            email={venue.email}
            website={venue.website}
            key={venue.id}
          />
        )}
      </div>
    </div>
  );
}

VenueList.propTypes = {
  venueList: PropTypes.array
};

export default VenueList;
