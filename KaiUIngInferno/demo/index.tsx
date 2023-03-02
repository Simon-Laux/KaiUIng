import { render, Component } from 'inferno';
import { ListView, Header } from '../src'

import "./styles.scss";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  render() {
    return (
      <div>
        <h1>KaiUIngInferno Demo</h1>
        <div class='demo-screen'>
          <Header text="Sample List"></Header>
          <ListView>List</ListView>
        </div>
      </div>
    );
  }
}

render(
  <MyComponent />,
  document.getElementById("app")
);