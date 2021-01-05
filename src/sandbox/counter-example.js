// import { useState } from "react";

// const [meow, setMeor] = useState(0);

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.state = { count: 0 };
    // this.state = { count: props.count };
  }

  componentDidMount(prevProps, prevState) {
    const storedCount = localStorage.getItem("count");
    const parsedCount = JSON.parse(storedCount, 10);
    if (!isNaN(parsedCount)) {
      this.setState({ count: parsedCount });
    }
  }

  componentDidUpdate(prevState, prevProps) {
    if (prevState.count !== this.state.count) {
      // const countJson = JSON.stringify(this.state.count);
      localStorage.setItem("count", this.state.count);
    }
  }

  handleAdd() {
    console.log("add one");
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }
  handleMinus() {
    console.log("minus one");
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }
  handleReset() {
    console.log("reset");
    this.setState(() => ({ count: 0 }));
  }

  clearAll() {
    localStorage.clear();

    // const countReset = this.props.count
    this.setState(() => {
      return {
        count: 0,
      };
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Count: {this.state.count}</h1>
        <div className="buttons">
          <button className="minus" onClick={this.handleMinus}>
            -1
          </button>
          <button className="reset" onClick={this.handleReset}>
            reset
          </button>
          <button className="add" onClick={this.handleAdd}>
            +1
          </button>

          <div className="clear-mem">
            <button onClick={this.clearAll}> CLEAR MEMORY</button>
          </div>
        </div>
      </div>
    );
  }
}

Counter.defaultProps = {
  //! if no count is passed into the props (when counter is rendered), this default will be shown
  // count: 100,
};

ReactDOM.render(
  <Counter count={300} />,
  document.getElementById("app-container")
);
// ! without use State
// let count = 0;
// const addOne = () => {
//   count += 1;
//   renderCounterApp();
//   console.log(count);
// };

// const minusOne = () => {
//   count -= 1;
//   renderCounterApp();
//   console.log(count);
// };
// const reset = () => {
//   count = 0;
//   renderCounterApp();
//   console.log(count);
// };

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div className="counter">
//       <span>
//         <h1>Count: {count}</h1>

//         <button className="btn" onClick={minusOne}>
//           -
//         </button>
//         <button className="btn" onClick={reset}>
//           reset
//         </button>
//         <button className="btn" onClick={addOne}>
//           +
//         </button>
//       </span>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();
