import React, { Component } from "react";
import PropTypes from "prop-types";
import { Note, Interval, Distance, Scale, Chord } from "tonal";

class RangeSelector extends Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired
  };

  state = {
    high: 70,
    low: 60,
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { high, low } = this.state;
    const range = { high, low };
    const conf = {
      method: "post",
      body: JSON.stringify(range),
      headers: new Headers({ "Content-Type": "application/json" })
    };
    fetch(this.props.endpoint, conf).then(response => console.log(response));
  };

  render() {
    const { high, low } = this.state;
    return (
      <div className="column">
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">High</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="high"
                onChange={this.handleChange}
                value={high}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Low</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="low"
                onChange={this.handleChange}
                value={low}
                required
              />
            </div>
          </div>
          <div className="control">
            <button type="submit" className="button is-info">
              Set Range 
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default RangeSelector;
