import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import Spinner from 'react-spinkit'

export class App extends Component {
  render() {
    return (
      <div> 
        <p> Hello </p>
      </div>

    );
  }
}

const MapStateToProps = state => ({

})

export default connect(MapStateToProps)(App);
