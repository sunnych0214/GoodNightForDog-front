import React, {Component} from "react";
import styles from "./header.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class headerModule extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isOpen: true
    };
  }

  render () {
    const { name } = this.props;

    return (
      <div>
        {name}
      </div>
    );
  }
}

export default headerModule;