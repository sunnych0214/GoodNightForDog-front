import React, { Component } from "react";
import styles from "./adoptItem.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
const transform = { 'color': '털 색', 'age': '나이', 'weight': '몸무게', 'location': '지역' };

class adoptItemModule extends Component {
  render () {
    const { dog } = this.props;

    return (
      <Link to={'/adopt/' + dog._id}>
        <div className={cx('d-day-box')}>
          <div className={cx('d-day')}>D-{dog.dDay}</div>
        </div>

        <div className={cx('dog-content')}>
          <img src={dog.thumbnail} alt="thumbnail" />          
          <div className={cx('content')}>
            <div className={cx('value')}>
              <div className={cx('title')}>{dog.species}({dog.gender})</div>
              <div className={cx('etc')}>
                <span>{dog.color}</span>
                <span>{dog.age}</span>
                <span>{dog.weight}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default adoptItemModule;
