import React from 'react';
import SoundNode from './SoundNode';

var SoundNodeList = React.createClass({
  render: function() {
    var sounds = [
      {
        name: 'Rain',
        iconSrc: '/images/icon-rain.png',
        audioSrc: '/lib/sounds/rain.m3u8'
      },
      {
        name: 'Thunder',
        iconSrc: '/images/icon-thunder.png',
        audioSrc: '/lib/sounds/thunderstorm.m3u8'
      },
      {
        name: 'Wind',
        iconSrc: '/images/icon-wind.png',
        audioSrc: '/lib/sounds/wind.m3u8'
      },
      {
        name: 'Leaves',
        iconSrc: '/images/icon-leaves.png',
        audioSrc: '/lib/sounds/leaves.m3u8'
      },
      {
        name: 'Forest',
        iconSrc: '/images/icon-forest.png',
        audioSrc: '/lib/sounds/forest.m3u8'
      },
      {
        name: 'Stream',
        iconSrc: '/images/icon-stream.png',
        audioSrc: '/lib/sounds/waterstream.m3u8'
      }
    ];
    var soundNodes = sounds.map(function(sound, i){
      return <SoundNode name={sound.name} iconSrc={sound.iconSrc} audioSrc={sound.audioSrc} key={i}/>
    });
    return <ul className="sound-node-list cf">{soundNodes}</ul>;
  } 
});

module.exports = SoundNodeList;