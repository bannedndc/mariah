import React, { Component } from "react";
import PropTypes from "prop-types";
import { Note, Interval, Distance, Scale, Chord } from "tonal";

class TempoSelector extends Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired
  };

  state = {
    bpm: 60,
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const bpm = this.state;
    const data = { bpm };
    const conf = {
      method: "post",
      body: JSON.stringify(data),
      headers: new Headers({ "Content-Type": "application/json" })
    };
    fetch(this.props.endpoint, conf).then(response => console.log(response));
  };

  render() {
    return (
      <div className="column">
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">BPM</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="bpm"
                onChange={this.handleChange}
                value={this.state.bpm}
                required
              />
            </div>
          </div>
          <div className="control">
            <button type="submit" className="button is-info">
              Set Tempo 
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default TempoSelector;
