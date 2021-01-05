import React from "react";

//! changed from class to stateless functional component
const Header = (props) => (
  <header className="header">
    <h1 className="header-title container">{props.title}</h1>
    {props.subtitle && (
      <h3 className="header-subtitle container">{props.subtitle}</h3>
    )}
  </header>
);

//I can use default values for props and
Header.defaultProps = {
  title: "Indecision",
  subtitle: "meh",
};

export default Header;
