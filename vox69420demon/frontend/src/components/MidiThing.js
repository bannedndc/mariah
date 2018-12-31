import React, { Component } from "react";
import MIDISounds from 'midi-sounds-react';
import PropTypes from "prop-types";
import { Note, Interval, Distance, Scale, Chord } from "tonal";



class MidiThing extends Component {
  static propTypes = {
    //eventually scale
  };

  state = {
    note: '60',
    name: 'C'
  };

  setNoteName() {
    this.setState({ name : Note.fromMidi(this.state.note) })
  }

  handleInc = e => {
    this.setState({ note : parseInt(this.state.note) + 1 + "" });
    this.setNoteName();
  };

  handleDec = e => {
    this.setState({ note : parseInt(this.state.note) - 1 + "" });
    this.setNoteName();
  };

  playTestInstrument() {
    this.midiSounds.playChordNow(3, [this.state.note], 2.5);
  }

  render() {
    return (

      <div className="tile is-ancestor">
	<div className="tile is-vertical is-12">
	  <div className="tile">
	    <div className="tile is-parent">
	      <article className="tile is-child notification is-black level">
		<div className="midithing level">
		  <p><button onClick={this.handleDec.bind(this)} className="button is-large">down</button></p>

		  <p><button onClick={this.playTestInstrument.bind(this)} className="button is-large">{this.state.name}</button></p>

		  <p><button onClick={this.handleInc.bind(this)} className="button is-large">up</button></p>
		  
		  <MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="app" instruments={[3]} />	

		</div>

	      </article>
	    </div>
	  </div>
	</div>
      </div>

    );
  }
}
export default MidiThing;
