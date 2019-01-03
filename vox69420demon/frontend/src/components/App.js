import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import Form from "./Form";
import MidiThing from "./MidiThing";
import RangeSelector from "./RangeSelector";
import TempoSelector from "./TempoSelector";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
      <div className="container is-fluid">
	<div className="notification">
	  <Welcome name="adam"/>

	    <div className="tile is-ancestor">
	      <div className="tile is-4 is-vertical is-parent">
		<div className="tile is-child box">
		  <TempoSelector endpoint="this will be update user endpoint" />
		</div>
		<div className="tile is-child box">
		  <RangeSelector endpoint="this will be update user endpoint" />
		</div>
	      </div>
	      <div className="tile is-parent">
		<div className="tile is-child box">
		  <MidiThing low={60} high={65} />
		</div>
	      </div>
	    </div>

	</div>
      </div>
  );
}

const wrapper = document.getElementById("app");

wrapper ? ReactDOM.render(<App />, wrapper) : null;
