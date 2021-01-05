import React from "react";
import AddOption from "./AddOption";
import Action from "./Action";
import Header from "./Header";
import Options from "./Options";
import OptionModal from "./OptionModal";

const myTitle = "Decision Pro";
const mySub = "Take control over your own life";

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    name: "What shuld we do today?",
    selectedOption: undefined,
    noClicks: true,
  };

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

  unClickable = () => {
    if (this.state.options.length > 0) {
      return !this.state.noClicks;
    }
    return this.state.noClicks;
  };

  addOptions = (x) => {
    this.setState((prevState) => {
      return {
        options: [...prevState, x],
      };
    });
  };

  closeModalWindow = () => {
    this.setState(() => {
      return {
        selectedOption: undefined,
      };
    });
  };
  handleDeleteAll = () => {
    console.log("remove all clicked");
    this.setState(() => {
      return {
        options: [],
      };
    });
    console.log("remove all completed");
  };

  handleRandomPick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const chosenOption = this.state.options[randomNum];
    this.setState(() => {
      return {
        name: chosenOption,
        selectedOption: chosenOption,
      };
    });
  };

  handleRemoveSingleOption = (originalOptionText) => {
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
  };

  handleAddOption = (option) => {
    if (!option) {
      return <p className="errorMsg">Enter valid value to add item</p>;
    } else if (this.state.options.indexOf(option) > -1) {
      return <p className="errorMsg">This option already exists</p>;
    }

    this.setState((prevState) => {
      return {
        // options: prevState.options.concat(option),
        options: [...prevState.options, option],
      };
    });
  };
  render() {
    return (
      <div>
        <Header title={myTitle} subtitle={mySub} />
        <div className="container action">
          <Action
            handleRandomPick={this.handleRandomPick}
            name={this.state.name}
            unClickable={this.unClickable}
          />
        </div>
        <div className="container app-body">
          <Options
            options={this.state.options}
            unClickable={this.unClickable}
            handleDeleteAll={this.handleDeleteAll}
            handleRemoveSingleOption={this.handleRemoveSingleOption}
            //! this function is hopefully to be passed to the <option /> component
          />
          <AddOption handleAddOption={this.handleAddOption} />
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleRandomPick={this.handleRandomPick}
          closeModalWindow={this.closeModalWindow}
        />
      </div>
    );
  }
}
IndecisionApp.defaultProps = {
  options: ["Meow"],
};
