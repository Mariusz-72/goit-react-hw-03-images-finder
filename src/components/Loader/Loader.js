import React, { Component } from 'react';

import { Puff } from 'react-loader-spinner';


class CustomLoader extends Component {
  render() {
    return (
      <div className="loader">
        <Puff type="Puff" color="#00BFFF" height={100} width={100} />
      </div>
    );
  }
}

export default CustomLoader;
