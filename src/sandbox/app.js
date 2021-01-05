console.log("test");

const myTitle = "Decision Pro";
const mySub = "Take control over your own life";
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteAll = this.handleDeleteAll.bind(this);
    this.addOptions = this.addOptions.bind(this);
    this.handleRandomPick = this.handleRandomPick.bind(this);
    this.unClickable = this.unClickable.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleRemoveSingleOption = this.handleRemoveSingleOption.bind(this);

    this.state = {
      options: [],
      // options: ["Play a game", "Watch a movie", " Go for a run", "Sleep"],
      name: "What should I do today?",
      noClicks: true,
    };
  }

  //! Life Cycyle methods to use with local storage
  componentDidMount() {
    try {
      const localOptions = localStorage.getItem("options");
      const optionsParsed = JSON.parse(localOptions);
      console.log(optionsParsed);
      if (optionsParsed) {
        this.setState(() => {
          return {
            options: optionsParsed,
          };
        });
      }
    } catch (error) {
      //! do this to remove the ugly error message and left it default to
      console.log("there was an error");
    }
  }

  componentDidUpdate(prevState, prevProps) {
    if (prevState.options.length !== this.state.options.length) {
      console.log("saving data");
      const optionsJson = JSON.stringify(this.state.options);
      // const optionsJson = JSON.stringify(this.state.options);
      localStorage.setItem("options", optionsJson);
    }
  }

  unClickable() {
    if (this.state.options.length > 0) {
      return !this.state.noClicks;
    }
    return this.state.noClicks;
  }

  addOptions(x) {
    this.setState((prevState) => {
      return {
        options: [...prevState, x],
      };
    });
  }
  handleDeleteAll() {
    console.log("remove all clicked");
    this.setState(() => {
      return {
        options: [],
      };
    });
    console.log("remove all completed");
  }

  handleRandomPick() {
    this.setState(() => {
      return {
        name: this.state.options[
          Math.floor(Math.random() * this.state.options.length)
        ],
      };
    });
  }

  handleRemoveSingleOption(originalOptionText) {
    this.setState((prevState) => {
      //   //! included in new array if true

      return {
        options: prevState.options.filter((option) => {
          return originalOptionText !== option;
          //! the return here is important!
          console.log(option);
        }),
      };
    });
  }

  handleAddOption(option) {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }

    this.setState((prevState) => {
      return {
        // options: prevState.options.concat(option),
        options: [...prevState.options, option],
      };
    });
  }
  render() {
    return (
      <div>
        <Header title={myTitle} subtitle={mySub} />
        <Action
          handleRandomPick={this.handleRandomPick}
          name={this.state.name}
          unClickable={this.unClickable}
        />
        <Options
          options={this.state.options}
          unClickable={this.unClickable}
          handleDeleteAll={this.handleDeleteAll}
          handleRemoveSingleOption={this.handleRemoveSingleOption}
          //! this function is hopefully to be passed to the <option /> component
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: ["Meow"],
};

//! changed from class to stateless functional component
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h3>{props.subtitle}</h3>}
    </div>
  );
};

//I can use default values for props and
Header.defaultProps = {
  title: "Indecision",
  subtitle: "meh",
};

//! changed from class to stateless functional component
const Action = (props) => {
  return (
    <span>
      <button disabled={props.unClickable()} onClick={props.handleRandomPick}>
        {props.name}
      </button>
    </span>
  );
};

const Options = (props) => {
  return (
    <div className="options-list">
      {props.options.length == 0 && <h4>Please add an option to begin!</h4>}

      {props.options.map((option, index) => {
        return (
          <Option
            key={index}
            optionText={option}
            number={index}
            handleRemoveSingleOption={props.handleRemoveSingleOption}
          />
        );
      })}

      <span className="btn-remove-all">
        <button
          disabled={props.unClickable()}
          className="btn-removeAll"
          onClick={props.handleDeleteAll}
        >
          Remove all
        </button>
      </span>
    </div>
  );
};

const Option = (props) => {
  return (
    <div className="option">
      Option {props.number}: {props.optionText}
      <button
        className="btn-option-delete"
        onClick={(e) => {
          // console.log(props.optionText);
          props.handleRemoveSingleOption(props.optionText);
        }}
      >
        🗑️
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined,
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.optionName.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      // return { error };
      return { error: error };
    });

    if (!error) {
      //! clears the text field if there is not error
      e.target.elements.optionName.value = "";
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="optionName" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app-container"));
