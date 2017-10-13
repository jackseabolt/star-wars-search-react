import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import Spinner from 'react-spinkit'
import {searchCharacters} from './actions/index'; 
import './index.css'; 


export class App extends React.Component {
  renderResults() {
    if (this.props.loading) {
      return (
        <div>
          <Spinner className="spinner" spinnerName="circle" noFadeIn />
          <p>Spinner</p>
        </div>
      )
    }

    if (this.props.error) {
      return <strong>{this.props.error}</strong>;
    }

    const characters = this.props.characters.map((character, idx) => 
      <li className="results" key={idx}>{character}</li>
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
        <div className="container">
          <img src={require('./images/logo.png')} alt="Star Wars Logo" className="logo" />
          <form className="form" onSubmit={e => this.onSubmit(e)}>
            <input type="search" placeholder="Search" ref={input => this.input = input} />
            <button className="form-button" type="submit">Search</button>
          </form>
          {this.renderResults()}
        </div>
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
