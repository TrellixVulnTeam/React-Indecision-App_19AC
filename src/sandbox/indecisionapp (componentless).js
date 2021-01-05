console.log("App.js is working");

const myApp = {
  title: "Indecision App",
  subtitle: "Making better choices everyday",
  options: [],
};
// JSX - my Javascript XML
//

const getOptions = () => {
  // console.log("getOptions");
  return myApp.options.map((option, index) => {
    return <li key={index}>{option}</li>;
  });
};

const removeOptionsHandler = () => {
  myApp.options = [];
  applicationRenderer();
};

const handleSubmit = (e) => {
  e.preventDefault();

  const userOption = e.target.elements.option.value.toUpperCase();
  // console.log(userOption);

  if (userOption) {
    myApp.options.push(userOption);
    //! resets the value in text field
    e.target.elements.option.value = "";
    applicationRenderer();
    console.log("User option uploaded successfully");
  }
  optionInput.placeholder = "Please enter a task";
  applicationRenderer();
};

const onRandom = () => {
  if (myApp.options.length > 0) {
    const selectedOption = Math.floor(Math.random() * myApp.options.length);
    //! use the above to get a 0 based index for my array
    // console.log(selectedOption);
    // myApp.options = [selectedOption.value];
    alert(myApp.options[selectedOption]);
    myApp.options = [];
    applicationRenderer();
  }
};

const optionInput = document.getElementsByName("option");

const applicationRenderer = () => {
  const template = (
    <div>
      <h1>{myApp.title}</h1>
      {myApp.subtitle && <p>{myApp.subtitle}</p>}
      <button
        className="btn"
        onClick={onRandom}
        disabled={myApp.options.length > 1 ? false : true}
      >
        Decide For me
      </button>
      <button className="btn" onClick={removeOptionsHandler}>
        Remove All
      </button>
      {myApp.options.length > 0 ? (
        <ol>{getOptions()}</ol>
      ) : (
        <h4>You have no options, bro</h4>
      )}

      <form className="form" onSubmit={handleSubmit}>
        <input type="text" name="option" placeholder="Option here" />
        <button className="btn" type="submit">
          Add Option
        </button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};
const appRoot = document.getElementById("app-container");

applicationRenderer();
//! SANDPBOX - SECOND APP
