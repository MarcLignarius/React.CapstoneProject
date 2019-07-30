import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import './app.css';
import Header from '../header/header';
import ShowList from '../showList/showList';
import BandList from '../bandList/bandList';
import VenueList from '../venueList/venueList';
import { shows, bands, venues } from '../../data/data.js';

export default class App extends Component {
  state = {
    shows,
    bands,
    venues
  }

  getShows() {
    return this.state.shows;
  }

  getShowIndex = (uid) => this.state.shows.findIndex((show) => show.uid === uid)
  getBandIndex = (uid) => this.state.bands.findIndex((band) => band.uid === uid)
  getVenueIndex = (uid) => this.state.venues.findIndex((venue) => venue.uid === uid)

  handleAddHype = (uid) => {
    let updatedShows = [...this.state.shows];
    updatedShows[this.getShowIndex(uid)].hypeScore = updatedShows[this.getShowIndex(uid)].hypeScore + 1;
    this.setState({ shows: updatedShows });
  }

  handleAddShow = (details) => {
    let updatedShows = [...this.state.shows, details];
    this.setState({ shows: updatedShows });
  }

  handleEditShow = (details) => {
    let updatedShows = [...this.state.shows]
    updatedShows[this.getShowIndex(details.uid)] = details;
    this.setState({ shows: updatedShows })
  }

  handleDeleteShow = (uid) => {
    let updatedShows = [...this.state.shows];
    updatedShows.splice(this.getShowIndex(uid), 1);
    this.setState({ shows: updatedShows });
  }

  handleAddBand = (details) => {
    let updatedBands = [...this.state.bands, details];
    this.setState({ bands: updatedBands });
  }

  handleEditBand = (details) => {
    let updatedBands = [...this.state.bands]
    updatedBands[this.getBandIndex(details.uid)] = details;
    this.setState({ bands: updatedBands })
  }

  handleDeleteBand = (uid) => {
    let updatedBands = [...this.state.bands];
    updatedBands.splice(this.getBandIndex(uid), 1);
    this.setState({ bands: updatedBands });
  }

  handleAddVenue = (details) => {
    let updatedVenues = [...this.state.venues, details];
    this.setState({ venues: updatedVenues });
  }

  handleEditVenue = (details) => {
    let updatedVenues = [...this.state.venues]
    updatedVenues[this.getVenueIndex(details.uid)] = details;
    this.setState({ venues: updatedVenues })
  }

  handleDeleteVenue = (uid) => {
    let updatedVenues = [...this.state.venues];
    updatedVenues.splice(this.getVenueIndex(uid), 1);
    this.setState({ venues: updatedVenues });
  }

  render() {
    return (
      <HashRouter>
        <Header />
        <Route exact path='/' render={() => <ShowList
          showList={this.state.shows}
          handleAddShow={this.state.handleAddShow}
          handleEditShow={this.state.handleEditShow}
          handleDeleteShow={this.state.handleDeleteShow}
          handleAddHype={this.state.handleAddHype}
        />}
        />
        <Route exact path='/bands' render={() =>
          <BandList
            bandList={this.state.bands}
            handleAddBand={this.state.handleAddBand}
            handleEditBand={this.state.handleEditBand}
            handleDeleteBand={this.state.handleDeleteBand}
          />}
        />
        <Route exact path='/venues' render={() =>
          <VenueList
            venueList={this.state.venues}
            handleAddVenue={this.state.handleAddVenue}
            handleEditVenue={this.state.handleEditVenue}
            handleDeleteVenue={this.state.handleDeleteVenue}
          />}
        />
      </HashRouter>
    )
  }
}
