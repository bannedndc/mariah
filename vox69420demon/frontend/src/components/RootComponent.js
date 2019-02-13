import React, {Component} from "react"
import ReactDOM from "react-dom"
import MIDISounds from 'midi-sounds-react'
import { Note, Interval, Distance, Scale, Chord } from "tonal"

function RootComponent(props) {
    let mode = props.data.exerciseMode ? 'in progress' : 'start button'
    let exercise = 'Long Tones' 

    return (
      <div className="notification">
	<div class="columns is-centered is-vcentered is-multiline has-text-centered">

	  <div className="column is-full">
	    <div className="notification is-danger has-text-center">
	     <label> 
	      <input onChange={props.handleChange} type="checkbox" name="exerciseMode"
	      checked={props.data.exerciseMode} /> {props.data.exerciseMode ? 'STOP' : 'START'}
	     </label>
	     <select 
	      value={props.data.chosenExercise} onChange={props.handleChange} name='chosenExercise'>

	      <option value={0}>Long Tones</option>
	      <option value={1}>Minor Second Pattern</option>
	      <option value={2}>Octave Jumps</option>
	     </select>
	    </div>
	  </div>

	  <div className="column is-full">
	    <div className="notification is-danger has-text-center">
	     <label> 
	      <input onChange={props.handleChange} type="number" name="bottom"
	      value={props.data.bottom} /> {props.data.bottom}
	     </label>
	     <label> 
	      <input onChange={props.handleChange} type="number" name="top"
	      value={props.data.top} /> -> {props.data.top}
	     </label>
	    </div>
	  </div>

	  <div className="column is-one-third has-text-center">
	    <button onClick={props.handleDec} className="button is-rounded">{'<'}</button>
	  </div>

	  <div className="column is-one-third">
	    <div className="card">
	      <div className="card-content">
		<p className="title">
		  <a onClick={props.handleClick}>{props.data.root}</a>
		</p>
		<p className="subtitle">
		  {exercise}
		</p>
	      </div>
	      <footer className="card-footer">
		<p className="card-footer-item">
		  <span>
		    {mode}
		  </span>
		</p>
		<p className="card-footer-item">
		 <label> 
		  <input onChange={props.handleChange} type="number" name="bpm"
		  value={props.data.bpm} /> {props.data.bpm} bpm
		 </label>
		</p>
	      </footer>
	    </div>
	  </div>

	  <div className="column is-one-third">
	    <button onClick={props.handleInc} className="button is-rounded">{'>'}</button>
	  </div>

	</div>
      </div>
    )
}

export default RootComponent
