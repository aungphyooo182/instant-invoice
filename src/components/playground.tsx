import React, { Component } from "react";
interface PlayGroundProps {
  message: string;
}

interface PlayGroundState {
  value: number;
}

class PlayGround extends React.Component<PlayGroundProps, PlayGroundState> {
  state: PlayGroundState = { value: 1 };

  handleClick(data: number) {
    console.log(data);
    const value = data + 1;
    const state = this.state;
    state.value = value;
    this.setState(state);
  }

  render() {
    const { value } = this.state;
    return (
      <React.Fragment>
        <span>{this.props.message}</span>
        <div>{value}</div>
        <button
          className="btn btn-primary"
          onClick={() => this.handleClick(value)}
        >
          Click Me!
        </button>{" "}
      </React.Fragment>
    );
  }
}

export default PlayGround;
