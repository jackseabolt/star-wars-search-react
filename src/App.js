import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import Spinner from 'react-spinkit'
import {searchCharacters} from './actions'; 

export class App extends React.Component {
  renderResults() {
    if (this.props.loading) {
      return <Spinner spinnerName="circle" noFadeIn />;
    }

    if (this.props.error) {
      return <strong>{this.props.error}</strong>;
    }

    const characters = this.props.characters.map((character, idx) => 
      <li key={idx}>{character}</li>
    );
    
    return (
      <ul>
        {characters}
      </ul>
    ); 
  }
  
  onSubmit(event){
    event.preventDefault(); 
    this.props.dispatch(searchCharacters(this.input.value)); 
    this.input.value = ''; 
  }
  
  render() {
    return (
      <div> 
          <form onSubmit={e => this.onSubmit(e)}>
            <input type="search" ref={input => this.input = input} />
            <button type="submit">Search</button>
          </form>
          <ul>
            {this.renderResults()}
          </ul>
      </div>
    );
  }
}

const MapStateToProps = state => ({
  characters: state.characters, 
  loading: state.loading, 
  error: state.error
}); 

export default connect(MapStateToProps)(App);
