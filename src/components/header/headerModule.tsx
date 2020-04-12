import React, { Component } from "react";
import styles from "./header.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { Navbar } from "..";

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
      <div className={cx('header')}>
        <div className={cx('account')}>
          <button className={cx('btn', 'btn-link', 'login')}>로그인</button>
          <button className={cx('btn', 'btn-link', 'register')}>회원가입</button>
        </div>
        <div className={cx('logo')}>
          <Link to="/"><img src="logo.svg" alt="logo" /></Link>
        </div>
        <Navbar></Navbar>
      </div>
    );
  }
}

export default HeaderComponent;