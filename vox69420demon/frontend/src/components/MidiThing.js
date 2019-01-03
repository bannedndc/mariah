import React, { Component } from "react";
import MIDISounds from 'midi-sounds-react';
import PropTypes from "prop-types";
import { Note, Interval, Distance, Scale, Chord } from "tonal";



class MidiThing extends Component {
  static propTypes = {
    low: PropTypes.number.isRequired,
    high: PropTypes.number.isRequired,
  };

  state = {
    curr: 60,
    name: 'C4'
  };

  setCurrName() {
    this.setState({ name : Note.fromMidi(this.state.curr) })
  }

  handleInc = e => {
    this.setState({ curr : parseInt(this.state.curr) + 1 + "" });
    this.setCurrName();
  };

  handleDec = e => {
    this.setState({ curr : parseInt(this.state.curr) - 1 + "" });
    this.setCurrName();
  };

  playTestInstrument() {
    this.midiSounds.playChordNow(3, [this.state.curr], 2.5);
  }

  render() {
    return (
      <div className="midithing level">

	<p><button onClick={this.handleDec.bind(this)} className="button is-large">down</button></p>

	<p><button onClick={this.playTestInstrument.bind(this)} className="button is-large">{this.state.name}</button></p>

	<p><button onClick={this.handleInc.bind(this)} className="button is-large">up</button></p>
	
	<MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="app" instruments={[3]} />	

      </div>
    );
  }
}

MidiThing.defaultProps = {
  low: 60,
  high: 65
};

export default MidiThing;
