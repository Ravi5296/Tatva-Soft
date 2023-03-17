import React, { Component } from 'react';

const HOC = (HocComponent, data) => {
  return class extends Component {
    render() {
      return <HocComponent {...this.props} {...data} />;
    }
  };
};

export default HOC;
