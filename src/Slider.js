import React from 'react';
import Slider from 'rc-slider';

var CustomizedSlider = React.createClass({
  propTypes: {
    volume: React.PropTypes.number.isRequired,
    setVolume: React.PropTypes.func.isRequired
  },

  onSliderChange: function(newValue) {
    this.props.setVolume(newValue);
  },

  render: function() {
    return <Slider value={this.props.volume} 
              onChange={this.onSliderChange}
              tipFormatter={null} />;
  }
});

module.exports = CustomizedSlider;