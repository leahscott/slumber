import React from 'react';
import Sound from 'react-sound';
import Slider from './Slider';

var SoundNode = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    iconSrc: React.PropTypes.string.isRequired,
    audioSrc: React.PropTypes.string.isRequired
  },

  getInitialState : function() {
    return {
      isActive : false,
      isPlaying: false,
      volume: 50
    };
  },

  toggleActive : function() {
    var newValue = (this.state.isActive ? false : true);
    this.setState({ isActive: newValue });
  },

  handleClick: function(e) {
    this.toggleActive();
    this.setState({ isPlaying: !this.state.isPlaying });
  },

  setVolume: function(value) {
    this.setState({
      "volume": value
    });
  },

  render: function () {
    var name = this.props.name,
        playStatus = this.state.isPlaying ? 'PLAYING' : 'PAUSED',
        classList = "cf sound-node " + name.toLowerCase();

    classList += this.state.isActive ? ' active' : '';

    return (
      <li className={classList}>
        <img className="sound-icon" src={this.props.iconSrc} alt={name} onClick={this.handleClick} />
        <Sound url={this.props.audioSrc} playStatus={playStatus} volume={this.state.volume} />
        <Slider key={name} volume={this.state.volume} setVolume={this.setVolume} />
      </li>
    );
  }
});

module.exports = SoundNode;