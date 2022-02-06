import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return (
      <div className='col-12'>
        <h2 className='bg-primary text-white text-center p2'>
          {this.props.name} do list
        </h2>
      </div>
    );
  }
}
