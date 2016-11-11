import React from 'react';

var AudioControls = React.createClass({
  getInitialState: function () {
    return {
      muted: false
    };
  },

  toggleMute: function() {
    this.setState({ muted: !this.state.muted });
  },

  render: function () {
    var actions = {
      mute: {
        name: "Mute",
        src: "/images/icon-mute.png",
        classList: "control-mute"
      },
      unmute: {
        name: "Unmute",
        src: "/images/icon-unmute.png",
        classList: "control-unmute"
      }
    };
    var action = this.state.muted ? actions.unmute : actions.mute;
    return (
      <button className={"audio-control " + action.classList} aria-label={action.name} onClick={this.toggleMute}>
        <img src={action.src} alt={action.name} title={action.name} />
      </button>      
    );
  }
});

module.exports = AudioControls;