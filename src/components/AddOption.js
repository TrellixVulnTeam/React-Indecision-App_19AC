import React from "react";

export default class AddOption extends React.Component {
  state = { error: undefined };

  handleAddOption = (e) => {
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
  };
  render() {
    return (
      <div className="form-group add-option">
        {this.state.error && <p>{this.state.error}</p>}
        <form className="form-control" onSubmit={this.handleAddOption}>
          <input
            maxLength="100"
            type="text"
            className="form-input-name"
            name="optionName"
            placeholder="E.g Play Tennis (100 chars)"
          />
          <button className="btn-small">Add Option</button>
        </form>
      </div>
    );
  }
}
