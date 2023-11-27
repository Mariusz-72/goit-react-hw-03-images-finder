import React, { Component } from 'react';

class Button extends Component {
  handleClick = () => {
    const { onClick } = this.props;
    onClick();
  };

  render() {
    const { isVisible } = this.props;

    return (
      <button
        className="button-load-more"
        onClick={this.handleClick}
        style={{ display: isVisible ? 'block' : 'none' }}
      >
        Load More
      </button>
    );
  }
}

export default Button;
