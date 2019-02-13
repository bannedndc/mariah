import React, {Component} from "react"
import ReactDOM from "react-dom"
import profileData from "./ProfileData"
import MIDISounds from 'midi-sounds-react';
import { Note, Interval, Distance, Scale, Chord } from "tonal";
import Root from "./Root"


function App() {
  //const profiles = profileData.map(profile => <RootDisplay key={profile.id} name={profile.name} top= /> )

  return (
    <div className="midithing">
      <Root />
    </div>
  )
}

const wrapper = document.getElementById("app")
wrapper ? ReactDOM.render(<App />, wrapper) : null
