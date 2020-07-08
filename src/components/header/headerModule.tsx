import React, { Component } from "react";
import styles from "./header.module.scss";
import classNames from "classnames/bind";
import { Navbar } from "..";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const cx = classNames.bind(styles);

// tslint:disable-next-line:no-empty-interface
interface IRecipeProps {
}

class HeaderComponent extends Component<IRecipeProps> {
  constructor (props: IRecipeProps) {
    super(props);

    this.state = {
      isOpen: true
    };
  }

  render () {
    return (
      <header>
        <Navbar></Navbar>
      </header>
    );
  }
}

export default HeaderComponent;