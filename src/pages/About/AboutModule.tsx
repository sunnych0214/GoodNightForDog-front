import React, { Component } from "react";
import styles from "./About.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

class AboutModule extends Component {
  render() {
    return (
      <div className={cx('Container')}>
        About
      </div>
    );
  }
}

export default AboutModule;