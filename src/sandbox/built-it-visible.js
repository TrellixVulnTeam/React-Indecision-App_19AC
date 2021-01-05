const appRoot = document.getElementById("app-container");

class Content extends React.Component {
  constructor(props) {
    super(props);
    [];
    this.toggleContentHandler = this.toggleContentHandler.bind(this);
    this.state = {
      visibility: true,
    };
  }

  toggleContentHandler() {
    this.setState((previosValueOfState) => {
      return {
        visibility: !previosValueOfState.visibility,
      };
    });
  }

  render() {
    return (
      <div className="main">
        <h1>Visibilty Toggle</h1>
        <div>
          <button
            className="btn"
            onClick={this.toggleContentHandler}
            // onClick={() => {
            //   this.toggleContentHandler();
            // }}
          >
            {this.state.visibility ? "Hide" : "Show"}
          </button>
        </div>
        {this.state.visibility && (
          <span>
            <p>Haha, it was me, Dio!</p>
          </span>
        )}
      </div>
    );
  }
}

ReactDOM.render(<Content />, appRoot);

// ! This is the older version!

// const appRoot = document.getElementById("app-container");
// let visibility = false;

// const programRender = () => {
//   const counter = () => {
//     if (visibility === false) {
//       visibility = !visibility;
//       programRender();

//       return; //! used return to break out the the whole cycle
//     }

//     visibility = !visibility;
//     programRender();
//   };

//   const program = (
//     <div className="container">
//       <h1>Visibility Toggler</h1>
//       <button id="btn" onClick={counter}>
//         {visibility ? "Hide content" : "Show"}
//       </button>
//       {visibility && (
//         <div className="container">
//           <p>
//             " Haha! You were expecting content but
//             <strong>, it was me, Dio!</strong>"
//           </p>
//         </div>
//       )}
//     </div>
//   );
//   ReactDOM.render(program, appRoot);
// };
// programRender();
