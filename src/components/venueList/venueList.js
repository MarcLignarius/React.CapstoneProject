import React from 'react';
import PropTypes from 'prop-types';
import Venue from '../venue/venue';
import './venueList.css'

function VenueList(props){
  return (
    <div>
      <h1>Venues</h1>
      <div>
        {props.venueList.map((show) =>
          <Venue
            venueName={show.venueName}
            venuePhoto={show.venuePhoto}
            venueAddress={show.venueAddress}
            venueDescription={show.venueDescription}
            venuePhone={show.venuePhone}
            venueEmail={show.venueEmail}
            venueWebsite={show.venueWebsite}
            key={show.id}
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
