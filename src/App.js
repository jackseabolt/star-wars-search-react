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
      <div className="results" key={idx}><p className="name">{character}</p></div>
    );
  
    return (
      <div className="resultsContainer">
        {characters}
      </div>
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
            <table>
              <tr>
                <td>
                 <input type="search" placeholder="Search" ref={input => this.input = input} />
                </td>
                <td>
                  <button className="form-button" type="submit">Search</button>
                </td>
              </tr>
            </table>
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
