import React, { Component } from 'react';
import './app.css';
import Header from '../header/header';
import Show from '../show/show';
import shows from './../../data/data.js';

export default class App extends Component {
  state={
    shows,
  }

  getShows(){
    return this.state.shows;
  }

  getShowIndex = (uid) => this.state.shows.findIndex((show) => show.uid === uid)

  handleAddHype = (uid) => {
    let updatedShows = [...this.state.shows];
    updatedShows[this.getShowIndex(uid)].hypeScore = updatedShows[this.getShowIndex(uid)].hypeScore + 1;
    this.setState({shows: updatedShows});
  }

  handleAddShow = (details) => {
    let updatedShows = [...this.state.shows, details];
    this.setState({shows: updatedShows});
  }

  handleEditShow = (details ) => {
    let updatedShows = [...this.state.shows]
    updatedShows[this.getShowIndex(details.uid)] = details;
    this.setState({shows: updatedShows})
  }

  handleDeleteShow = (uid) => {
    let updatedShows = [...this.state.shows];
    updatedShows.splice(this.getShowIndex(uid), 1);
    this.setState({shows: updatedShows});
  }
  render() {
      return (
        <div>
          <Header />
          <Show />
        </div>
      )
    }
  }
