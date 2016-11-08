import React from 'react';
import SoundNode from './SoundNode';
import sounds from './sound-manifest';

var SoundNodeList = React.createClass({
  render: function() {
    var soundNodes = sounds.map(function(sound, i){
      return <SoundNode name={sound.name} iconSrc={sound.iconSrc} audioSrc={sound.audioSrc} key={i}/>
    });
    return <ul className="sound-node-list cf">{soundNodes}</ul>;
  }
});

module.exports = SoundNodeList;