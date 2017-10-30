import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// Code Product Component Here
class Product extends React.Component {
  render() {
    return (
      <div>
      <h1>{this.props.name}</h1>
      <h2>{this.props.producer}</h2>
      <h3>{this.props.hasWatermark}</h3>
      <h3>{this.props.color}</h3>
      <h3>{this.props.weight}</h3>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight(props, propName, component) {
    if(props[propName] === undefined) {
      return new Error(`missing ${propName}`)
    } if(props[propName] < 80 || props[propName] > 300) {
      return new Error(`${propName} is outside range`)
    } if (isNaN(props[propName])) {
      return new Error(`${propName} is not a number`)
    }
  }
}

export default Product
