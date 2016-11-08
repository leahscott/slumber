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
      isActive : false
    };
  },

  toggleActive : function(e) {
    var newValue = (this.state.isActive ? false : true);
    this.setState({ isActive: newValue });
  },

  render: function () {
    var name = this.props.name;
    var classList = "cf sound-node " + name.toLowerCase();
    classList += this.state.isActive ? ' active' : '';
    return (
      <li className={classList} >
        <img className="sound-icon" src={this.props.iconSrc} alt={name} onClick={this.toggleActive}/>
        <div className={"volume-slider " + name.toLowerCase() + "-slider"}></div>
        <Sound url={this.props.audioSrc} playStatus="PLAYING" />
      </li>
    );
  }
});

module.exports = SoundNode;