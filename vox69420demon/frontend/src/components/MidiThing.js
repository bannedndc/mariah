import React, { Component } from "react";
import MIDISounds from 'midi-sounds-react';
import PropTypes from "prop-types";
import { Note, Interval, Distance, Scale, Chord } from "tonal";


//CLASSES TO MAKE - go back to App and put it all in here
//Range Slider
//Mode display/mode changer/exercise playing
//RootNote + incrementer + decrementer
//Tempo Display

//constructor
//getting derived state from props
//render
//component did mount

class MidiThing extends Component {

  // CONSTRUCTOR -- will need to set initial props (from users profile)
  constructor(props) {
    super(props);
    this.bpm = 60;

    this.state = {
      low: 55,
      high: 65,
      midiValue: 60,
      noteName: 'C4',
      piano: 3, 
      metronome: 1225, 
      exerciseMode: false,
      exercises: [0, 1, 2]
    };
  }

  componentDidMount() {

    //set timeout for in exercise mode 

    //setting up an event listener?

    //GET PROFILE INFO FOR USER

    //this.noteID = setInterval(
    //  () => this.incRoot(),
    //  60000 / this.bpm
    //);
  }

//getderivedstatefromprops(props, state)
//return updated state based on props

//shouldcomponentupdate (nextProps, nextState)
//tells which component you should update which optimizes app efficiency

//componentwillunmount
//clean up or tear down
//tearing down event listener set up in componentdidmount

//componentWillUnmount() {
//  clearInterval(this.noteID);
//}

  //maybe run the program at specific intervals
  //setInterval(
  //  () => runLongTones(),
  //  12*(60000/bpm)
  //);

  handleInc() {
    this.setState({
      midiValue: parseInt(this.state.midiValue) + 1 + "",
      noteName: Note.fromMidi(this.state.midiValue + 1)
    });
    this.midiSounds.playChordNow(3, [this.state.midiValue], 2.5);
  }

  handleDec() {
    this.setState((state, props) => {
      return {midiValue: parseInt(state.midiValue) - 1 + "",
	      noteName: Note.fromMidi(state.midiValue - 1)};
    });
  }

  playTestInstrument() { //MANUAL MODE
    this.midiSounds.playChordNow(3, [this.state.midiValue], 2.5);
    console.log("playing sound");
  }

  startExercise(root) { 
    this.setState((state, props) => {
      return {exerciseMode: true};
    })

    if(this.state.exerciseMode && (this.state.midiValue <= this.state.high)) {
      // GET METRONOME VALUES
      var bpm = 80;
      var N = 4 * 60 / bpm;
      var duration8th = N/8;

      // START METRONOME
      var when=this.midiSounds.contextTime();

      // PLAY ROOT BEAT 1 - 8
      this.midiSounds.playChordAt(when+duration8th*0,
				  this.state.piano, 
				  [this.state.midiValue], 
				  N);
      // PLAY METRONOME BEAT 1-12
      for(var i=0; i<24; i++) {
	//console.log(when+duration8th*i);
	this.midiSounds.playChordAt(when+duration8th*i,
				    this.state.metronome, 
				    [this.state.midiValue], 
				    duration8th);
      }

      console.log('before: ' + this.state.midiValue);
      //INC
      this.handleInc();
      console.log('after: ' + this.state.midiValue);

      // PLAY ROOT BEAT 13
      this.midiSounds.playChordAt(when+duration8th*13,
				  this.state.piano, 
				  [this.state.midiValue+1], 
				  N);
    }
  }

  stopAllSounds() {
    this.midiSounds.cancelQueue()
  }

  render() {
    return (
      <div className="midithing level">
	<h1>Hi {this.props.name} </h1>

	/* START Exercise puts us in exercise mode*/
	<p><button onClick={this.stopAllSounds.bind(this)} className="button
	is-large">STOP</button></p>

	/* START Exercise puts us in exercise mode*/
	<p><button onClick={this.startExercise.bind(this)} className="button
	is-large">START Exercise</button></p>

	/* Decrement lowers note by half step */
	<p><button onClick={this.handleDec.bind(this)} className="button is-large">down</button></p>

	/* Clicking root manually plays note */
	/* IF in exercise mode, on change starts exercise */
	<p><button onClick={this.playTestInstrument.bind(this)} className="button is-large">{this.state.noteName}</button></p>

	/* Increment raises note by half step */
	<p><button onClick={this.incRoot.bind(this)} className="button is-large">up</button></p>
	
	<MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="app"
	instruments={[3, 1225]} />	

      </div>
    )
  }
}

export default MidiThing
