import React from "react";
import css from "./Header.module.css"; 


class Header extends React.Component {

  render() {
    return (
      <header className={css.header}>
        Todos ({this.props.done} / {this.props.count})
      </header>
    )
  }
}

export default Header;