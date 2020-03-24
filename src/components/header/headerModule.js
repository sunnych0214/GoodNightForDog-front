import React, {Component} from "react";
import styles from "./header.module.scss";
import classNames from "classnames/bind";

import { Navbar } from "components";

const cx = classNames.bind(styles);

class headerModule extends Component {
  render () {
    return (
      <div className={cx('header')}>
        <div className={cx('account')}>
          <button className={cx('btn', 'btn-link', 'login')}>로그인</button>
          <button className={cx('btn', 'btn-link', 'register')}>회원가입</button>
        </div>
        <div className={cx('logo')}>
          <img src="logo.svg" alt="logo"></img>
        </div>
        <Navbar></Navbar>
      </div>
    );
  }
}

export default headerModule;