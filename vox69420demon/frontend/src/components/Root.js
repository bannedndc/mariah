import React, {Component} from "react"
import ReactDOM from "react-dom"
import profileData from "./ProfileData"
import MIDISounds from 'midi-sounds-react'
import { Note, Interval, Distance, Scale, Chord } from "tonal"
import RootComponent from "./RootComponent"


  //componentDidMount() { //on the exercise start component
  //  setTimeout((prevState) => {
  //    this.setState({
  //      root : this.state.root + 1
  //    })
  //  }, 60000 / this.state.bpm)
  //}

  //make any profile changing stuff an input

class Root extends Component {
  constructor() {
    super()

    let monika = profileData[0]
    let adam = profileData[1]

    this.state = { // defaults
      bottom: 55,
      top: 65,
      root: 60,
      noteName: Note.fromMidi(60),
      bpm: 60,
      piano: 3, 
      metronome: 1225, 
      chosenExercise: 0,
      exerciseMode: false,
      exercises: [0, 1, 2]
    };

    this.handleDec = this.handleDec.bind(this)
    this.handleInc = this.handleInc.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }


  componentDidMount() {
    //fetch('URL FOR SAVED VOCAL PROFILE')
    //  .then(response => response.json())
    //  .then(data => { setState({}) })
  }

  startExercise() {
    this.intervalId = setInterval(() => {
      console.log('in exercise')
      this.state.chosenExercise == 0 && this.midiSounds.playChordNow(3, [this.state.root], 2.5)
      this.state.top && this.handleInc()
      // long tones [this.state.root, 0, 0 , 0, 0, 0, 0, 0]
      // minor second pattern [this.state.root, +1, this.state.root, -1, this.state.root, -1, this.state.root, +1, this.state.root, +1, this.state.root, -1, this.state.root]

    }, 60000 / this.state.bpm)
  }

  stopExercise() {
    clearInterval(this.intervalId)
  }

  handleDec() {
    this.setState({
      root : this.state.root - 1 
    })
  }

  handleInc() {
    this.setState({
      root : this.state.root + 1 
    })
  }

  handleClick() {
    this.midiSounds.playChordNow(3, [this.state.root], 2.5);
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    this.setState(
      type === 'checkbox' ? {[name] : checked} : {[name] : value}
    )
    console.log(name + ": " + value)
    if(type === 'checkbox') {
      checked ? this.startExercise() : this.stopExercise()
    }
  }

  render() {
    return (
      <div className="container is-fluid">
	<RootComponent 
	  handleDec={this.handleDec} 
	  handleInc={this.handleInc} 
	  handleClick={this.handleClick} 
	  handleChange={this.handleChange} 
	  data={this.state}
	  />
	<div className="is-invisible">
	  <MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="app"
	instruments={[3, 1225]} />
	</div>
      </div>
    )
  }
}

export default Root
