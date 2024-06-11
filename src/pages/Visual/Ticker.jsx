import React from "react";

class Ticker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ticker: 0 };
    // 无需渲染的变量，不用写在 state
    this.interval = null;
  }

  tick = () => {
    this.reset();
    this.interval = setInterval(() => {
      if (this.state.ticker < this.props.times) {
        this.setState(({ ticker }) => ({ ticker: ticker + 1 }));
      } else {
        clearInterval(this.interval);
      }
    }, this.props.interval);
  };

  reset = () => {
    this.setState({ ticker: 0 });
    clearInterval(this.interval);
  };

  render() {
    return (
      <div>
        <span style={{ fontSize: 100 }}>{this.state.ticker}</span>
        <button type="button" onClick={this.tick}>Tick!</button>
        <button type="button" onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default function() {
  return <Ticker times={5} interval={1000} />;
}
