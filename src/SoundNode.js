import React from 'react';
import Sound from 'react-sound';

var SoundNode = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    iconSrc: React.PropTypes.string.isRequired,
    audioSrc: React.PropTypes.string.isRequired
  },

  getInitialState : function() {
    return {
      isActive : false,
      play: false
    };
  },

  toggleActive : function() {
    var newValue = (this.state.isActive ? false : true);
    this.setState({ isActive: newValue });
  },

  handleClick: function(e) {
    this.toggleActive();
    this.setState({ play: !this.state.play })
  },

  render: function () {
    var name = this.props.name,
        playStatus = this.state.play ? 'PLAYING' : 'PAUSED',
        classList = "cf sound-node " + name.toLowerCase();

    classList += this.state.isActive ? ' active' : '';

    return (
      <li className={classList} >
        <img className="sound-icon" src={this.props.iconSrc} alt={name} onClick={this.handleClick} />
        <div className={"volume-slider " + name.toLowerCase() + "-slider"}></div>
        <Sound url={this.props.audioSrc} playStatus={playStatus} />
      </li>
    );
  }
});

module.exports = SoundNode;